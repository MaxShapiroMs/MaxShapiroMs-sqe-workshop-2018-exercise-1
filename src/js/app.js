import $ from 'jquery';
import {parseCode} from './code-analyzer';

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        let tableHtml='<table><tr>';
        for(let j in parsedCode[0]) {
            tableHtml += '<th>' + j + '</th>';
        }
        tableHtml+='</tr>';
        for(let i = 0; i < parsedCode.length; i++) {
            tableHtml += '<tr>';
            for(let j in parsedCode[i] ) {
                tableHtml += '<td>' + parsedCode[i][j] + '</td>';
            }
            tableHtml += '</tr>';
        }
        tableHtml += '</table>';
        document.getElementById('parsedCode').innerHTML = tableHtml;
    });
});
