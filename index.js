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

const setTimeFrame = (timeframes) => {
  daily.classList.remove('active')
  weekly.classList.remove('active')
  monthly.classList.remove('active');

  $(`.${timeframes}`).classList.add('active');

  getData(0, workDur, workPrev, timeframes);
  getData(1, playDur, playPrev, timeframes);
  getData(2, studyDur, studyPrev, timeframes);
  getData(3, exerciseDur, exercisePrev, timeframes);
  getData(4, socialDur, socialPrev, timeframes);
  getData(5, selfcareDur, selfcarePrev, timeframes);

  const timeframeText = {
    daily: 'Previous Day - ',
    weekly: 'Last Week - ',
    monthly: 'Last month - ',
  }

  work.textContent = timeframeText.timeframes;
  play.textContent = timeframeText.timeframes;
  study.textContent = timeframeText.timeframes;
  exercise.textContent = timeframeText.timeframes;
  social.textContent = timeframeText.timeframes;
  selfcare.textContent = timeframeText.timeframes;
}

weekly.addEventListener('click', () => setTimeFrame('weekly'))
monthly.addEventListener('click', () => setTimeFrame('monthly'))
daily.addEventListener('click', () => setTimeFrame('daily'))
