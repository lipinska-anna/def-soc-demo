import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMarkdown',
  standalone: true
})
export class ConvertMarkdownPipe implements PipeTransform {
  transform(text: string): string {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\\"/g, '"');
    text = text.replace(/\n\n/g, '</p><p>');
    text = text.replace(/\n/g, '<br>');
    text = text.replace(/- (.*?)(?=\n|$)/g, '<li>$1</li>');
    text = text.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
    text = '<p>' + text + '</p>';

    return text;
  }

}
