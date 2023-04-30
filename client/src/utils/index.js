import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';

export function getRandomPrompts(prompts) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompts = surpriseMePrompts[randomIndex];

    if(randomPrompts === prompts) return getRandomPrompts(prompts);
 
    return randomPrompts;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}