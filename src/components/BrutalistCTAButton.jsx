import styled from "styled-components";

export default function BrutalistCTAButton({
    topText,
    bottomText,
    variant = "primary",
    onClick,
    ariaLabel,
}) {
    const mergedLabel = `${topText} ${bottomText}`.trim();
    const buttonLabel = ariaLabel || mergedLabel;

    return (
        <StyledWrapper>
            <button
                type="button"
                className={`ui-btn ${variant}`}
                onClick={onClick}
                aria-label={buttonLabel}
                title={buttonLabel}
            >
                <span>{mergedLabel}</span>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .ui-btn {
    --btn-default-bg: rgb(41, 41, 41);
    --btn-padding: 14px 24px;
    --btn-hover-bg: rgb(51, 51, 51);
    --btn-transition: 0.25s;
    --btn-letter-spacing: 0.12rem;
    --btn-animation-duration: 1.2s;
    --btn-shadow-color: rgba(0, 0, 0, 0.2);
    --btn-shadow: 0 8px 20px 0 var(--btn-shadow-color);
    --hover-btn-color: #fac921;
    --default-btn-color: #fff;
    --font-size: 14px;
    --font-weight: 700;
    --font-family: "Space Grotesk", Menlo, "Roboto Mono", monospace;

    box-sizing: border-box;
    min-width: 180px;
    height: 52px;
    padding: var(--btn-padding);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--default-btn-color);
    font: var(--font-weight) var(--font-size) var(--font-family);
    background: var(--btn-default-bg);
    border: 1px solid rgba(191, 219, 254, 0.35);
    cursor: pointer;
    transition: var(--btn-transition);
    overflow: hidden;
    box-shadow: var(--btn-shadow);
    text-transform: uppercase;
    border-radius: 4px;
  }

  .ui-btn.primary {
    --btn-default-bg: linear-gradient(135deg, #f43f5e 0%, #be123c 55%, #831843 100%);
    --btn-hover-bg: linear-gradient(135deg, #fb7185 0%, #e11d48 55%, #9f1239 100%);
    --default-btn-color: #fff1f2;
    --hover-btn-color: #fff;
  }

  .ui-btn.secondary {
    --btn-default-bg: linear-gradient(140deg, rgba(10, 25, 74, 0.98), rgba(6, 14, 44, 0.94));
    --btn-hover-bg: linear-gradient(140deg, rgba(16, 36, 98, 0.98), rgba(9, 24, 73, 0.94));
    --default-btn-color: #dbeafe;
    --hover-btn-color: #bae6fd;
  }

  .ui-btn span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
    z-index: 1;
  }

  .ui-btn span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
  }

  .ui-btn:hover,
  .ui-btn:focus-visible {
    background: var(--btn-hover-bg);
    transform: translateY(-1px);
  }

  .ui-btn:hover span,
  .ui-btn:focus-visible span {
    color: var(--hover-btn-color);
  }

  .ui-btn:hover span::before,
  .ui-btn:focus-visible span::before {
    animation: chitchat linear both var(--btn-animation-duration);
  }

  .ui-btn:active {
    transform: translateY(1px);
  }

  .ui-btn:focus-visible {
    outline: 3px solid #22d3ee;
    outline-offset: 3px;
  }

  .ui-btn:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @keyframes chitchat {
    0% {
      content: "#";
    }
    5% {
      content: ".";
    }
    10% {
      content: "^{";
    }
    15% {
      content: "-!";
    }
    20% {
      content: "#$_";
    }
    25% {
      content: "No:0";
    }
    30% {
      content: "#{+.";
    }
    35% {
      content: "@}-?";
    }
    40% {
      content: "?{4@%";
    }
    45% {
      content: "=.,^!";
    }
    50% {
      content: "?2@%";
    }
    55% {
      content: ";1}]";
    }
    60% {
      content: "?{%:%";
      right: 0;
    }
    65% {
      content: "|{f[4";
      right: 0;
    }
    70% {
      content: "{4%0%";
      right: 0;
    }
    75% {
      content: "'1_0<";
      right: 0;
    }
    80% {
      content: "{0%";
      right: 0;
    }
    85% {
      content: "]>'";
      right: 0;
    }
    90% {
      content: "4";
      right: 0;
    }
    95% {
      content: "2";
      right: 0;
    }
    100% {
      content: "";
      right: 0;
    }
  }

  @media (max-width: 640px) {
    .ui-btn {
      min-width: 162px;
      height: 48px;
      --font-size: 12px;
    }
  }
`;