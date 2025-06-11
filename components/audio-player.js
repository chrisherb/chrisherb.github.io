class TrnrAudioPlayer extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = `
            <style>
                #audio-footer {
                    z-index: 100;
                    min-block-size: 64px;
                }
            </style>
            <footer id="audio-footer" style="visibility: hidden" class="fixed responsive max surface-container">
                <nav class="audio-nav">
                    <p class="small-text audio-title"></p>
                    <button id="play-icon-container" class="circle transparent">
                        <i id="play-icon" class="extra primary-text">play_arrow</i>
                    </button>
                    <div id="waveform" class="max"></div>
                    <p class="small-text audio-time"></p>
                    <label class="slider medium">
                        <input id="audio-slider" type="range" value="50">
                        <span>
                          <i>volume_up</i>
                        </span>
                    </label>
                </nav>
            </footer>
        `;

    this.appendChild(template.content);
  }

  connectedCallback() {
    // make sure to initialize after everything has loaded
    if (document.readyState === "complete") {
      this.init();
    } else {
      window.addEventListener("load", () => this.init(), { once: true });
    }
  }

  init() {
    const playIconContainer = this.querySelector("#play-icon-container");
    const playIcon = this.querySelector("#play-icon");
    const playButtons = this.querySelectorAll(".play-button");
    const footer = this.querySelector("#audio-footer");
    const audioTime = this.querySelector(".audio-time");
    const slider = this.querySelector("#audio-slider");

    let playState = "play";

    const wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "rgb(81, 69, 58)",
      progressColor: "rgb(255, 184, 112)",
      height: 40,
      autoplay: true,
    });

    wavesurfer.setVolume(0.5); // Set initial volume to 50%

    wavesurfer.on("finish", () => {
      playIcon.innerHTML = "play_arrow";
      playState = "play";
    });

    wavesurfer.on("timeupdate", (currentTime) => {
      audioTime.innerText = this.toHHMMSS(currentTime);
    });

    playIconContainer.addEventListener("click", () => {
      if (playState === "play") {
        wavesurfer.play();
        playIcon.innerHTML = "pause";
        playState = "pause";
      } else {
        wavesurfer.pause();
        playIcon.innerHTML = "play_arrow";
        playState = "play";
      }
    });

    playButtons.forEach((button) => {
      button.addEventListener("click", () => {
        footer.style = "visibility: visible";
        const audioPath = button.dataset.audioPath; // Assuming each button has a data attribute with the audio path
        const title = button.dataset.audioTitle;
        const artist = button.dataset.audioArtist;
        wavesurfer.load(audioPath);
        playState = "pause";
        playIcon.innerHTML = "pause";
        this.querySelector(".audio-title").innerHTML = artist + " - " + title;
      });
    });

    slider.addEventListener("input", (input) => {
      wavesurfer.setVolume(input.target.value / 100);
    });
  }

  toHHMMSS(seconds) {
    var secNum = parseInt(seconds, 10); // don't forget the second param
    var hours = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - hours * 3600) / 60);
    var seconds = secNum - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }
}

window.customElements.define("trnr-audio-player", TrnrAudioPlayer);
