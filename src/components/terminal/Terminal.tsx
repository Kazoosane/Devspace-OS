
import { useEffect, useRef, useState } from "react";
import { executeCommand } from "./commands";

interface TerminalLine {
  id: number;
  command: string;
  output: string[];
}

export default function TerminalApp() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const commandHistory = useRef<string[]>([]);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const value = input.trim();

    if (!value) return;

    const result = executeCommand(value);

    if (result.clear) {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((previous) => [
      ...previous,
      {
        id: Date.now(),
        command: value,
        output: result.output,
      },
    ]);

    commandHistory.current.push(value);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      const nextIndex = Math.max(
        0,
        historyIndex === -1
          ? commandHistory.current.length - 1
          : historyIndex - 1
      );

      setHistoryIndex(nextIndex);
      setInput(commandHistory.current[nextIndex] ?? "");
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      const nextIndex = historyIndex + 1;

      if (nextIndex >= commandHistory.current.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory.current[nextIndex] ?? "");
      }
    }
  };

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="terminal-app"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-output" ref={terminalRef}>
        <div className="terminal-welcome">
          <p className="terminal-logo">
            DEVSPACE TERMINAL
          </p>

          <p>Welcome to DevSpace OS.</p>
          <p>Type 'help' to get started.</p>
          <br />
        </div>

        {history.map((item) => (
          <div key={item.id} className="terminal-entry">
            <div className="terminal-command">
              <span>visitor@devspace:~$</span>
              {item.command}
            </div>

            {item.output.map((line, index) => (
              <p key={index} className="terminal-line">
                {line || "\u00A0"}
              </p>
            ))}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="terminal-form">
          <label htmlFor="terminal-input">
            visitor@devspace:~$
          </label>

          <input
            ref={inputRef}
            id="terminal-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}