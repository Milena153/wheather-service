export function createAudioPlayer() {
    document.body.innerHTML = `
    <button class="music_button">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCklEQVR4nO3XO6wNURjF8fGIqOg8G3Lbq9KQSDQKJKJSeRQKKhGPRBA3GoVEhIQeNQUKN0SBRqHQUNCoSLxC4RG58ZMd+x7j5Nx7ZsbMmJPsfzPJmcn3rTVn7fn2zrJEIpFI5MBq7MJlPMVXnMm6CBZgPQ7jBl4bzPesC2AptuE07sW3W4j/IXYu1mA/ruJlQa2fcAcTrRvAChzHJD4XFPwCV7AP48F4rl57BrAXP4aI/YZHOIvtWDKkZjsGsBE/BwgOi/I6DmFdWLQl6/ZoTv3vRmFBTvMYO7Gqhro96lE6c6OPf1pZVuMc6FGf2sFNKzXCfKzFQVzDq3ytqnVLU7QRFmNT5+aAAY3iHBjPzYHwuezmHPA3E1FAEDIac0Bxwpx4govY0aU5MBNvcBvHsAELq9bNmqRP9KVRnAM9RqFua40kAwVJ/8AoRggrcSqeD97H7fhb3McBLOqsARwtsA9610kDuKACWRcMYGufrmdx7x/O0nPidXf8vR4DdWa17+R2M5wHZjkn3PpnA3Vnte/kNjbk2bHcs1NVxNee1X8w8KGs+Eayiru5R0NEZotQ2MVOM1nWQCNZxZY+v8/jiwgvZF5cb3vi73k2lzXQWFZxXjnOlRLfRlbjx+HLEOHh/pHS4tvKKpbjJB7Gz/JUvD7AiXC/kvhWs9okrWS1aRrPahs0mtVEIpH4BexcS0yat4SyAAAAAElFTkSuQmCC" alt="musical-notes">
    </button>

    <div class="audio_module closed">
        <h3 class="title">music list</h3>
        <ul class="song_list">
            <button class="song_button"></button>
            <button class="song_button"></button>
            <button class="song_button"></button>
            <button class="song_button"></button>
        </ul>
        <button class="back_button">back</button>
    </div>
    `
}

