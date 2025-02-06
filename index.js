const $ = (selector) => document.querySelector(selector); 
const daily = $('.daily');
const weekly = $('.weekly');
const monthly = $('.monthly');
const workDur = $('.work--duration');
const workPrev = $('.work--prev');
const playDur = $('.play--duration');
const playPrev = $('.play--prev');
const studyDur = $('.study--duration');
const studyPrev = $('.study--prev');
const exerciseDur = $('.exercise--duration');
const exercisePrev = $('.exercise--prev');
const socialDur = $('.social--duration');
const socialPrev = $('.social--prev');
const selfcareDur = $('.selfcare--duration');
const selfcarePrev = $('.selfcare--prev');
const work = $('.work');
const play = $('.play');
const study = $('.study');
const exercise = $('.exercise');
const social = $('.social');
const selfcare = $('.selfcare');

// FETCH DATA FROM DATA.JSON
const getData = async (num, activity1, activity2, timeframe)  => {
  const url = "data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    const act1 = `${json[num].timeframes[`${timeframe}`].current}`
    const act2 = `${json[num].timeframes[`${timeframe}`].previous}`
    activity1.textContent = act1 + `${act1 > 1 || act1 == 0 ? 'hrs' : 'hr'}`;
    activity2.textContent = act2 + `${act2 > 1 || act2 == 0 ? 'hrs' : 'hr'}`;
  } catch (error) {
    console.error(error.message);
  }
}

// WEEKLY DATA
weekly.addEventListener('click', () => {
  weekly.classList.add('active')
  daily.classList.remove('active')
  monthly.classList.remove('active')
  getData(0, workDur, workPrev, 'weekly');
  getData(1, playDur, playPrev, 'weekly');
  getData(2, studyDur, studyPrev, 'weekly');
  getData(3, exerciseDur, exercisePrev, 'weekly');
  getData(4, socialDur, socialPrev, 'weekly');
  getData(5, selfcareDur, selfcarePrev, 'weekly');
  work.textContent = `Last Week - `;
  play.textContent = `Last Week - `;
  study.textContent = `Last Week - `;
  exercise.textContent = `Last Week - `;
  social.textContent = `Last Week - `;
  selfcare.textContent = `Last Week - `;
})

// MONTHLY DATA
monthly.addEventListener('click', () => {
  monthly.classList.add('active')
  weekly.classList.remove('active')
  daily.classList.remove('active')
  getData(0, workDur, workPrev, 'monthly');
  getData(1, playDur, playPrev, 'monthly');
  getData(2, studyDur, studyPrev, 'monthly');
  getData(3, exerciseDur, exercisePrev, 'monthly');
  getData(4, socialDur, socialPrev, 'monthly');
  getData(5, selfcareDur, selfcarePrev, 'monthly');
  work.textContent = `Last Month - `;
  play.textContent = `Last Month - `;
  study.textContent = `Last Month - `;
  exercise.textContent = `Last Month - `;
  social.textContent = `Last Month - `;
  selfcare.textContent = `Last Month - `;
})

// DAILY DATA
daily.addEventListener('click', () => {
  daily.classList.add('active')
  weekly.classList.remove('active')
  monthly.classList.remove('active');
  getData(0, workDur, workPrev, 'daily');
  getData(1, playDur, playPrev, 'daily');
  getData(2, studyDur, studyPrev, 'daily');
  getData(3, exerciseDur, exercisePrev, 'daily');
  getData(4, socialDur, socialPrev, 'daily');
  getData(5, selfcareDur, selfcarePrev, 'daily');
  work.textContent = `Previous Day - `;
  play.textContent = `Previous Day - `;
  study.textContent = `Previous Day - `;
  exercise.textContent = `Previous Day - `;
  social.textContent = `Previous Day - `;
  selfcare.textContent = `Previous Day - `;
})