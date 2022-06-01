import styled from 'styled-components'

// https://codepen.io/abxlfazl/pen/NWrOBzg

export const CarContainer = styled.section`
  --black: #1a1c20;
  --white: #fff;
  --green: #00c380;
  --d-green: #019b66;
  --gray: #c1c1c1;
  --l-gray: #c4c4c4;
  --m-gray: #373838;
  --d-gray: #282724;
  --d-blue: #202428;
  --orange: #ef6206;
  --yellow: #dfa500;
  --l-yellow: #deb953;
  --light: #fbfbfb;
  --n-road: -4em;
  --p-road: 7em;

  font: normal 1em/1.45em 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: radial-gradient(ellipse at bottom, var(--green) 0%, #050608 100%);
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  .car {
    &::before {
      content: ' ';
      position: absolute;
      width: 15.5em;
      height: 62.9em;
      top: calc(50% - 26.2em);
      background-size: 24.6% 491%;
      background-repeat: no-repeat;
      background-position: center 0;
      animation: line 1.5s infinite linear, move-road 3.5s infinite linear;
      transform: perspective(311px) rotateX(83deg)
        translate3d(var(--n-road), -11.975em, 0);
      background-image: repeating-linear-gradient(
        to top,
        var(--white),
        var(--white) 4.6%,
        transparent 0,
        transparent 13.01%
      );
    }
    &::after {
      content: ' ';
      position: absolute;
      width: 15.2em;
      height: 13.2em;
      top: calc(50% - 8.8em);
      left: calc(50% - 7.55em);
      background-repeat: no-repeat;
      animation: light 1s linear infinite, shake 3.5s linear infinite;
      background-image: radial-gradient(
          58em 20em at 50% 215%,
          transparent 20%,
          var(--white) 20.5%,
          var(--white) 20.8%,
          var(--green) 21.5%
        ),
        radial-gradient(circle at center 100%, var(--black) 30%, transparent 0),
        linear-gradient(var(--white) 100%, transparent 0),
        radial-gradient(
          17.8em 37em at 70% 240%,
          var(--black) 30%,
          transparent 30.5%
        ),
        radial-gradient(
          17.8em 37em at 31% 240%,
          var(--black) 30%,
          transparent 30.5%
        ),
        radial-gradient(
          circle,
          var(--light) 48%,
          var(--black) 52%,
          var(--black) 59%,
          transparent 62%
        ),
        radial-gradient(
          circle,
          var(--light) 48%,
          var(--black) 52%,
          var(--black) 59%,
          transparent 62%
        ),
        radial-gradient(1em 1em at 102% 100%, var(--m-gray) 28%, #f3f3f3 30%),
        radial-gradient(
          1em 1em at 97% -7%,
          var(--m-gray) 28%,
          var(--l-gray) 30%
        ),
        radial-gradient(1em 1em at -6% 102%, var(--m-gray) 28%, #efefef 30%),
        radial-gradient(
          1em 1em at -6% -1%,
          var(--m-gray) 28%,
          var(--l-gray) 30%
        ),
        linear-gradient(
          to top,
          var(--m-gray) 50%,
          var(--d-gray) 0,
          var(--d-gray) 58%,
          var(--m-gray) 0
        ),
        linear-gradient(
          to top,
          var(--l-gray) 30%,
          var(--white) 100%,
          transparent 0
        ),
        radial-gradient(
          16.4em 30.1em at 209% 333%,
          var(--white) 30%,
          transparent 30.2%
        ),
        radial-gradient(
          16.4em 30.1em at -109% 333%,
          var(--white) 30%,
          transparent 30.2%
        ),
        linear-gradient(var(--gray) 100%, transparent 0),
        linear-gradient(var(--white) 100%, transparent 0),
        radial-gradient(
          6.7em 2.5em at 154% 8%,
          var(--black) 30%,
          transparent 33%
        ),
        radial-gradient(
          6.7em 2.5em at -53% 8%,
          var(--black) 30%,
          transparent 33%
        ),
        linear-gradient(var(--orange) 100%, transparent 0),
        linear-gradient(var(--orange) 100%, transparent 0),
        linear-gradient(var(--yellow) 100%, transparent 0),
        linear-gradient(var(--l-yellow) 100%, transparent 0),
        linear-gradient(var(--d-blue) 100%, transparent 0),
        radial-gradient(circle at 124% 39%, var(--d-blue) 60%, transparent 64%),
        radial-gradient(circle at -44% 39%, var(--d-blue) 60%, transparent 64%),
        radial-gradient(
          13.2em 2em at 50% 59%,
          var(--l-gray) 96%,
          transparent 100%
        ),
        radial-gradient(
          1.6em 1.6em at 75% -9%,
          var(--l-gray) 60%,
          transparent 64%
        ),
        radial-gradient(
          1.6em 1.6em at 15% -9%,
          var(--l-gray) 60%,
          transparent 64%
        ),
        linear-gradient(var(--d-blue) 100%, transparent 0),
        radial-gradient(
          6.9em 4.6em at 295% 3%,
          var(--d-blue) 30%,
          transparent 31%
        ),
        radial-gradient(
          6.9em 4.6em at -189% 3%,
          var(--d-blue) 30%,
          transparent 31%
        );
      background-size: 61.5% 20%, 5% 6%, 0.4% 39%, 60% 30%, 60% 30%, 16% 16%,
        16% 16%, 2.4% 2%, 2.4% 2.3%, 2.4% 2.3%, 2.4% 2.3%, 91% 12%, 93.9% 17%,
        12% 17.5%, 12% 17.5%, 38% 1.1%, 77% 25%, 9% 30%, 9% 30%, 8.4% 3%,
        8.4% 3%, 33% 6.5%, 36% 9%, 87% 30%, 10% 12%, 10% 12%, 78% 35%, 11% 8%,
        11% 8%, 68% 8%, 5% 7%, 5% 7%;
      background-position: 50.5% 0, 90% 37%, 88% 1.2%, 0 11.7%, 100% 11.7%,
        5% 63%, 95% 63%, 4.1% 55.7%, 4.1% 65.9%, 95.8% 55.7%, 95.8% 65.8%,
        center 62%, 49% 63.6%, 3.4% 46.2%, 96.5% 46.2%, center 40.9%,
        center 50.3%, 5.7% 48.6%, 95% 48.6%, 5% 75.2%, 95% 75.2%, 51% 86%,
        51.5% 87.3%, center 71.9%, -0.8% 77.8%, 101.7% 77.8%, center 80.2%,
        4% 85.9%, 97% 85.9%, center 92.5%, 11.7% 92.6%, 88.3% 92.6%;
    }
    margin: 0;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    animation: car 3.5s cubic-bezier(0.57, 0.63, 0.49, 0.65) infinite;
    background-image: radial-gradient(
        circle at 49% 117%,
        var(--black) 37%,
        transparent 38%
      ),
      radial-gradient(circle at -24% 50%, var(--white) 31%, transparent 49%),
      radial-gradient(
        2.95em 2.5em at 52% 1.2%,
        var(--black) 37%,
        transparent 38%
      ),
      radial-gradient(
        2.95em 2.5em at 52% 1.2%,
        var(--black) 37%,
        transparent 38%
      ),
      linear-gradient(var(--black) 100%, transparent 0),
      radial-gradient(circle at 49% 117%, var(--black) 37%, transparent 38%),
      radial-gradient(circle at 124% 50%, var(--white) 31%, transparent 49%),
      radial-gradient(
        2.95em 2.5em at 48% 1.2%,
        var(--black) 37%,
        transparent 38%
      ),
      radial-gradient(
        2.95em 2.5em at 48% 1.2%,
        var(--black) 37%,
        transparent 38%
      ),
      linear-gradient(var(--black) 100%, transparent 0),
      linear-gradient(var(--d-green) 100%, transparent 0);
    background-size: 2.5em 2.5em, 0.7em 0.6em, 2.5em 0.9em, 2.5em 0.9em,
      1.95em 3.9em, 2.5em 2.5em, 0.7em 0.6em, 2.5em 0.9em, 2.5em 0.9em,
      1.95em 3.9em, 13em 0.9em;
    background-position: calc(50% - 6.4em) calc(50% - 1.7em),
      calc(50% - 5.26em) calc(50% - -3.4em),
      calc(50% - 6.5em) calc(50% - -3.8em), calc(50% - 4.3em) calc(50% - -3.2em),
      calc(50% - 6.58em) calc(50% - -1.5em),
      calc(50% - -6.45em) calc(50% - 1.7em),
      calc(50% - -5.26em) calc(50% - -3.4em),
      calc(50% - -6.5em) calc(50% - -3.8em),
      calc(50% - -4.3em) calc(50% - -3.2em),
      calc(50% - -6.58em) calc(50% - -1.5em), center calc(50% - -3.8em);
  }

  @keyframes car {
    15%,
    23% {
      transform: translate3d(-2.3em, 0, 0);
    }

    36%,
    42% {
      transform: translate3d(-0.8em, 0, 0);
    }

    61%,
    71.5% {
      transform: translate3d(2.8em, 0, 0);
    }

    81%,
    88% {
      transform: translate3d(1.5em, 0, 0);
    }
  }

  @keyframes move-road {
    5.5% {
      transform: perspective(311px) rotateX(83deg)
        translate3d(var(--n-road), -11.975em, 0);
    }

    27%,
    51% {
      transform: perspective(311px) rotateX(83deg)
        translate3d(var(--p-road), -11.975em, 0);
    }

    73%,
    100% {
      transform: perspective(311px) rotateX(83deg)
        translate3d(var(--n-road), -11.975em, 0);
    }
  }

  @keyframes light {
    0%,
    37% {
      --light: #fbfbfb;
    }

    50% {
      --light: #f1f1f1;
    }

    62% {
      --light: #fbfbfb;
    }

    65% {
      --light: #f1f1f1;
    }

    95% {
      --light: #fbfbfb;
    }

    100% {
      --light: #f1f1f1;
    }
  }

  @keyframes shake {
    5%,
    26% {
      transform: rotate(-1.5deg);
    }

    33%,
    41% {
      transform: rotate(-0.5deg);
    }

    48%,
    69% {
      transform: rotate(1.5deg);
    }

    80%,
    95% {
      transform: rotate(0.5deg);
    }
  }
`
