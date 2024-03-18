// document.addEventListener("DOMContentLoaded", function() {
//     var currentSentenceIndex = 0;
//     var sentences = document.querySelectorAll('.sentence');
//     var audios = document.querySelectorAll('audio');
//     var isPlaying = false;
//     var isFirstPlay = true;
  
//     sentences.forEach(function(sentence, index) {
//       sentence.addEventListener('click', function() {
//         currentSentenceIndex = index;
//         playFromIndex(currentSentenceIndex);
//       });
//     });
  
//     function playFromIndex(index) {
//       pauseAll();
//       var audioElement = audios[index];
//       var currentSentence = sentences[index];
//       currentSentence.classList.add('playing'); // 재생 중인 문장을 하이라이트합니다.
//       audioElement.currentTime = 0;
//       audioElement.play();
  
//       audioElement.onended = function() {
//         currentSentence.classList.remove('playing');
//         if (currentSentenceIndex < sentences.length - 1) {
//           currentSentenceIndex++;
//           playFromIndex(currentSentenceIndex);
//         } else {
//           isPlaying = false;
//           document.getElementById("play-button").innerText = "재생";
//           document.getElementById("pause-button").style.display = "none";
//         }
//       };
//     }
  
//     function pauseAll() {
//       audios.forEach(function(audio) {
//         audio.pause();
//       });
//       isPlaying = false;
//       document.querySelectorAll('.playing').forEach(function(sentence) {
//         sentence.classList.remove('playing');
//       });
//     }
  
//     function togglePlayPause() {
//       var audioElement = audios[currentSentenceIndex];
//       if (isFirstPlay) {
//         isFirstPlay = false;
//         playFromIndex(0);
//         document.getElementById("play-button").innerText = "일시정지";
//         document.getElementById("pause-button").style.display = "block";
//       } else {
//         if (audioElement.paused) {
//           audioElement.play();
//           isPlaying = true;
//           document.getElementById("play-button").innerText = "일시정지";
//           document.getElementById("pause-button").style.display = "block";
//         } else {
//           audioElement.pause();
//           isPlaying = false;
//           document.getElementById("play-button").innerText = "재생";
//           document.getElementById("pause-button").style.display = "none";
//         }
//       }
//     }
  
//     document.getElementById("play-button").addEventListener("click", togglePlayPause);
//     document.getElementById("pause-button").addEventListener("click", togglePlayPause);
//   });
  