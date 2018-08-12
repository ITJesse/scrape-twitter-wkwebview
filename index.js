import { TimelineStream } from './scrape-twitter'

const timeline = new TimelineStream('zyb1231')
timeline.on('data', data => console.log(data))