class TrnrAudioPlayer extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = ` 
            <footer id="audio-footer" style="visibility: hidden" class="fixed responsive max surface-container">
                <nav class="padding">
                <button id="play-icon-container" class="circle transparent">
                    <i id="play-icon" class="extra primary-text">play_arrow</i>
                </button>
                <div id="waveform" class="max"></div>
                </nav>
            </footer>
      `;

        this.appendChild(template.content);
    }

    connectedCallback() {
        const playIconContainer = this.querySelector('#play-icon-container');
        const playIcon = this.querySelector('#play-icon');
        const playButtons = this.querySelectorAll('.play-button');
        const footer = this.querySelector('#audio-footer');

        let playState = 'play';

        const wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'rgb(81, 69, 58)',
            progressColor: 'rgb(255, 184, 112)',
            height: 50,
            autoplay: true
        });

        playIconContainer.addEventListener('click', () => {
            if (playState === 'play') {
                wavesurfer.play();
                playIcon.innerHTML = "pause";
                playState = 'pause';
            } else {
                wavesurfer.pause();
                playIcon.innerHTML = "play_arrow";
                playState = 'play';
            }
        });

        playButtons.forEach(button => {
            button.addEventListener('click', () => {
                footer.style = 'visibility: visible';
                const audioPath = button.dataset.audioPath; // Assuming each button has a data attribute with the audio path
                wavesurfer.load(audioPath);
                playState = 'pause';
                playIcon.innerHTML = "pause";
            });
        });
    }
}

window.customElements.define('trnr-audio-player', TrnrAudioPlayer);
