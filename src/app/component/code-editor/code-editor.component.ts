import { Component, OnInit, Input } from '@angular/core';
import { Line } from './line';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {

  lines: Line[] = [
    {
      content: 'import java.util.*;',
      timestamp: '0:01:55',
      seconds: 115
    },
    {
      content: 'class Main {',
      timestamp: '0:00:05',
      seconds: 5
    },
    {
      content: 'public static void main(String[] args) {',
      timestamp: '0:00:05',
      seconds: 5
    },
    {
      content: 'Collection<Integer> myList = new ArrayList<Integer>();',
      timestamp: '0:03:40',
      seconds: 220
    },
    {
      content: 'myList.add(10);',
      timestamp: '0:03:15',
      seconds: 195
    },
    {
      content: 'myList.add(20);',
      timestamp: '0:04:05',
      seconds: 245
    },
    {
      content: 'myList.add(30);',
      timestamp: '0:03:15',
      seconds: 195
    },
    {
      content: 'myList.add(50);',
      timestamp: '0:05:20',
      seconds: 320
    },
    {
      content: 'System.out.println("element at index 1 = " + myList.get(1));',
      timestamp: '0:06:55',
      seconds: 415
    },
    {
      content: 'for (Integer var : myList)',
      timestamp: '0:04:20',
      seconds: 260
    },
    {
      content: 'System.out.println(var);',
      timestamp: '0:05:25',
      seconds: 325
    },
    {
      content: 'ArrayList l1 = new ArrayList();',
      timestamp: '0:07:00',
      seconds: 420
    },
    {
      content: 'ArrayList<Integer> l2 = new ArrayList<Integer>();',
      timestamp: '0:08:55',
      seconds: 535
    },
    {
      content: 'ArrayList<Integer> l3 = new ArrayList();',
      timestamp: '0:08:55',
      seconds: 535
    },
    {
      content: 'Collection l4 = new ArrayList();',
      timestamp: '0:08:55',
      seconds: 535
    },
    {
      content: 'Collection<Integer> l5 = new ArrayList<Integer>();',
      timestamp: '0:08:25',
      seconds: 505
    },
    {
      content: 'Collection<Integer> l6 = new ArrayList();',
      timestamp: '0:08:55',
      seconds: 535
    },
    {
      content: 'List l7 = new ArrayList();',
      timestamp: '0:08:55',
      seconds: 535
    },
    {
      content: 'List<Integer> l8 = new ArrayList<Integer>();',
      timestamp: '0:08:55',
      seconds: 535
    },
    {
      content: 'List<Integer> l9 = new ArrayList();',
      timestamp: '0:08:55',
      seconds: 535
    }
  ];

  sourceCode = {
    lines: this.lines,
    title: 'Main.java'
  };

  @Input() seekVideo: Function;
  @Input() code;

  constructor() { }

  ngOnInit() {
  }

  onSelect(line: Line): void {
    this.seekVideo((line.seconds))
    console.log(line.seconds);
  }

}
