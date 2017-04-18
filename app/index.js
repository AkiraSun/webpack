import './main.scss';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';
let app  = document.createElement('div');
const myPromise = Promise.resolve(42);

app.innerHTML = '<h1>Hello Worldd</h1>';
app.appendChild(generateText());
document.body.appendChild(app);
$('body').append('<p>look at me! now is ' + moment().format() + '</p>');
