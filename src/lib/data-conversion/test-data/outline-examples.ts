const exampleWithSubtext = {
    outline: [
        '- 1',
        '  sub text',
        '- 2',
        '\t- 2.1',
        '\t  sub text',
        '- 3',
    ].join('\n'),
    sections: [
        '',
        '# Section 1',
        '1',
        'sub text',

        '',
        '# Section 2',
        '2',

        '',
        '# Section 2.1',
        '2.1',
        'sub text',

        '',
        '# Section 3',
        '3',
    ].join('\n'),
};

const simpleExample = {
    outline: ['- 1', '\t- 1.1', '\t\t- 1.2', '- 2', '- 3', '\t- 3.1'].join(
        '\n',
    ),
    sections: [
        '',
        '# Section 1',
        '1',
        '',
        '# Section 1.1',
        '1.1',
        '',
        '# Section 1.1.1',
        '1.2',
        '',
        '# Section 2',
        '2',
        '',
        '# Section 3',
        '3',
        '',
        '# Section 3.1',
        '3.1',
    ].join('\n'),
};

const exampleWithSubText2 = {
    outline: [
        '- 1',
        '\t- 1.1',
        '\t  ...',
        '\t  ...',
        '\t\t- 1.1.1',
        '\t\t  ...',
        '\t\t\t- 1.1.1.1',
        '\t\t\t  ...',
        '\t\t\t- 1.1.1.2',
        '\t\t\t  > ..',
        '- 2',
        '  ...',
        '- 3',
        '\t- 3.1',
    ].join('\n'),
    sections: [
        '',
        '# Section 1',
        '1',
        '',
        '# Section 1.1',
        '1.1',
        '...',
        '...',
        '',
        '# Section 1.1.1',
        '1.1.1',
        '...',
        '',
        '# Section 1.1.1.1',
        '1.1.1.1',
        '...',
        '',
        '# Section 1.1.1.2',
        '1.1.1.2',
        '> ..',

        '',
        '# Section 2',
        '2',
        '...',
        '',
        '# Section 3',
        '3',
        '',
        '# Section 3.1',
        '3.1',
    ].join('\n'),
};

const logseqDemo = {
    outline: `- ## Hi, welcome to Logseq!
- Logseq is a *privacy-first*, [open-source](https://github.com/logseq/logseq) platform for *knowledge* management and collaboration.
- This is a 3 minute tutorial on how to use Logseq. Let's get started!
- Here are some tips that might be useful.
- 1. Let's create a page called [[How to take dummy notes?]]. You can click it to go to that page, or you can \`Shift+Click\` to open it in the right sidebar! Now you should see both *Linked References* and *Unlinked References*.
- 2. Let's reference some blocks on [[How to take dummy notes?]], you can \`Shift+Click\` any block reference to open it in the right sidebar. Try making
  some changes on the right sidebar, those referenced blocks will be changed too!
\t- Hello, I'm a block! : This is a block reference.
\t- Hey, I'm another block! : This is another block reference.
- 3. Do you support tags?
\t- Of course, this is a #dummy tag.
- 4. Do you support tasks like todo/doing/done and priorities?
\t- Yes, type \`/\` and pick your favorite todo keyword or priority (A/B/C).
\t- NOW [#A] A dummy tutorial on "How to take dummy notes?"
\t- LATER [#A] Check out this awesome video by [:a {:href "https://twitter.com/shuomi3" :target "_blank"} "@shuomi3"] on how to use Logseq to take notes and organize your life!
\t  {{youtube(https://www.youtube.com/watch?v=BhHfF0P9A80&ab_channel=ShuOmi)}}
\t- DONE Create a page
\t- CANCELED [#C] Write a page with more than 1000 blocks
- That's it! You can create more bullets or open a local directory to import some notes now!
- You can also download our desktop app at https://github.com/logseq/logseq/releases`,
    sections: `
# Section 1
## Hi, welcome to Logseq!

# Section 2
Logseq is a *privacy-first*, [open-source](https://github.com/logseq/logseq) platform for *knowledge* management and collaboration.

# Section 3
This is a 3 minute tutorial on how to use Logseq. Let's get started!

# Section 4
Here are some tips that might be useful.

# Section 5
1. Let's create a page called [[How to take dummy notes?]]. You can click it to go to that page, or you can \`Shift+Click\` to open it in the right sidebar! Now you should see both *Linked References* and *Unlinked References*.

# Section 6
2. Let's reference some blocks on [[How to take dummy notes?]], you can \`Shift+Click\` any block reference to open it in the right sidebar. Try making
some changes on the right sidebar, those referenced blocks will be changed too!

# Section 6.1
Hello, I'm a block! : This is a block reference.

# Section 6.2
Hey, I'm another block! : This is another block reference.

# Section 7
3. Do you support tags?

# Section 7.1
Of course, this is a #dummy tag.

# Section 8
4. Do you support tasks like todo/doing/done and priorities?

# Section 8.1
Yes, type \`/\` and pick your favorite todo keyword or priority (A/B/C).

# Section 8.2
NOW [#A] A dummy tutorial on "How to take dummy notes?"

# Section 8.3
LATER [#A] Check out this awesome video by [:a {:href "https://twitter.com/shuomi3" :target "_blank"} "@shuomi3"] on how to use Logseq to take notes and organize your life!
{{youtube(https://www.youtube.com/watch?v=BhHfF0P9A80&ab_channel=ShuOmi)}}

# Section 8.4
DONE Create a page

# Section 8.5
CANCELED [#C] Write a page with more than 1000 blocks

# Section 9
That's it! You can create more bullets or open a local directory to import some notes now!

# Section 10
You can also download our desktop app at https://github.com/logseq/logseq/releases`,
};

const exampleWithEmptyParent = {
    outline: [
        '- ', // 1
        '\t- 1.1',
        '\t- ', // 1.2
        '\t\t- 1.2.1',
        '\t\t  ...',
        '- 2',
    ].join('\n'),
    sections: [
        '',
        '# Section 1',
        '',
        '',
        '# Section 1.1',
        '1.1',
        '',
        '# Section 1.2',
        '',
        '',
        '# Section 1.2.1',
        '1.2.1',
        '...',
        '',
        '# Section 2',
        '2',
    ].join('\n'),
};

export const outlineExamples = {
    exampleWithSubtext,
    exampleWithSubText2,
    logseqDemo,
    simpleExample,
    exampleWithEmptyParent,
};
