import React, { useState } from 'react';

// tage_page.html 을 js 로 변환한 것






function TestPage({ sentences = [] }) {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFirstPlay, setIsFirstPlay] = useState(true);

    const playFromIndex = (index) => {
        // 현재 재생 중인 문장의 스타일을 초기화합니다.
        const sentenceElements = document.querySelectorAll('.sentence');
        sentenceElements.forEach(sentence => sentence.classList.remove('playing'));

        setCurrentSentenceIndex(index);

        // 해당 인덱스부터 재생합니다.
        const audioElement = document.querySelectorAll('audio')[index];
        const currentSentence = document.querySelectorAll('.sentence')[index];
        currentSentence.classList.add('playing');
        audioElement.currentTime = 0;
        audioElement.play();

        // 오디오 재생이 끝나면 다음 문장을 재생하거나 재생 상태를 초기화합니다.
        audioElement.onended = () => {
            currentSentence.classList.remove('playing');
            if (currentSentenceIndex < sentences.length - 1) {
                setCurrentSentenceIndex(currentSentenceIndex + 1);
                playFromIndex(currentSentenceIndex + 1);
            } else {
                setIsPlaying(false);
            }
        };
    };

    const pauseAll = () => {
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => audio.pause());

        // 모든 문장의 강조 표시를 제거합니다.
        const sentenceElements = document.querySelectorAll('.sentence');
        sentenceElements.forEach(sentence => sentence.classList.remove('playing'));

        setIsPlaying(false);
    };

    const togglePlayPause = () => {
        setIsFirstPlay(false);

        if (isFirstPlay) {
            setIsFirstPlay(false);
            playFromIndex(0);
        } else {
            const audioElement = document.querySelectorAll('audio')[currentSentenceIndex];
            if (audioElement.paused) {
                audioElement.play();
                setIsPlaying(true);
            } else {
                audioElement.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div>
            <h1>동화 이야기</h1>
            <div id="audio-container">
                {sentences.map((sentence, index) => (
                    <div key={index}>
                        <p
                            className={`sentence ${currentSentenceIndex === index && 'playing'}`}
                            onClick={() => playFromIndex(index)}
                        >
                            {sentence}
                        </p>
                        <audio>
                            <source src={`audio/audio_${index + 1}.mp3`} type="audio/mp3" />
                            브라우저가 오디오 태그를 지원하지 않습니다.
                        </audio>
                        <br />
                    </div>
                ))}
            </div>
            <button id="play-button" onClick={togglePlayPause}>
                {isPlaying ? '일시정지' : '재생'}
            </button>
            <button id="pause-button" onClick={togglePlayPause} style={{ display: 'none' }}>
                일시정지
            </button>
        </div>
    );
}

export default TestPage;
