import { describe, expect, test } from 'vitest';
import { headingsToSections } from 'src/lib/data-conversion/headings-to-sections';

describe('headingsToSections', () => {
    test('should annotate headings based on level', () => {
        const input = `
# 1
...
## 1.1
...
...
### 1.1.1
...
#### 1.1.1.1
...
...
...
##### 1.1.1.1.1
...
...
## 1.2
...
...
...
...
...
...
### 1.2.1
...
...
#### 1.2.1.1
...
...
...
...
### 1.2.2
...
...
## 1.3
...
...
...
...
# 2
...
...
## 2.1
### 2.1.1
...
...
#### 2.1.1.1
...
...
### 2.1.2
...
...
## 2.2
...
...
### 2.2.1
...
...
#### 2.2.1.1
...
...
##### 2.2.1.1.1
...
...
# 3
...
...
## 3.1
...
...
### 3.1.1
...
...
#### 3.1.1.1
...
...
### 3.1.2
...
...
## 3.2
...
...
### 3.2.1
...
...
#### 3.2.1.1
...
...
### 3.2.2
...
...
## 3.3
...
...
`;
        const output = `
# Section 1
# 1
...

# Section 1.1
## 1.1
...
...

# Section 1.1.1
### 1.1.1
...

# Section 1.1.1.1
#### 1.1.1.1
...
...
...

# Section 1.1.1.1.1
##### 1.1.1.1.1
...
...

# Section 1.2
## 1.2
...
...
...
...
...
...

# Section 1.2.1
### 1.2.1
...
...

# Section 1.2.1.1
#### 1.2.1.1
...
...
...
...

# Section 1.2.2
### 1.2.2
...
...

# Section 1.3
## 1.3
...
...
...
...

# Section 2
# 2
...
...

# Section 2.1
## 2.1

# Section 2.1.1
### 2.1.1
...
...

# Section 2.1.1.1
#### 2.1.1.1
...
...

# Section 2.1.2
### 2.1.2
...
...

# Section 2.2
## 2.2
...
...

# Section 2.2.1
### 2.2.1
...
...

# Section 2.2.1.1
#### 2.2.1.1
...
...

# Section 2.2.1.1.1
##### 2.2.1.1.1
...
...

# Section 3
# 3
...
...

# Section 3.1
## 3.1
...
...

# Section 3.1.1
### 3.1.1
...
...

# Section 3.1.1.1
#### 3.1.1.1
...
...

# Section 3.1.2
### 3.1.2
...
...

# Section 3.2
## 3.2
...
...

# Section 3.2.1
### 3.2.1
...
...

# Section 3.2.1.1
#### 3.2.1.1
...
...

# Section 3.2.2
### 3.2.2
...
...

# Section 3.3
## 3.3
...
...
`;
        expect(headingsToSections(input)).toEqual(output);
    });
    test('should not discard text before the first heading', () => {
        const input = `
...
...

...        
# 1
...
## 1.1
...
...
### 1.1.1
...
#### 1.1.1.1
...
...
...
##### 1.1.1.1.1
...
...
## 1.2
...
# 2
...
`;

        const output = `
# Section 1
...
...

...        

# Section 2
# 1
...

# Section 2.1
## 1.1
...
...

# Section 2.1.1
### 1.1.1
...

# Section 2.1.1.1
#### 1.1.1.1
...
...
...

# Section 2.1.1.1.1
##### 1.1.1.1.1
...
...

# Section 2.2
## 1.2
...

# Section 3
# 2
...
`;
        expect(headingsToSections(input)).toEqual(output);
    });

    test('should reject text that has a section annotation', () => {
        const input = `
# 1
...
## 1.1
...
...
# Section 1
### 1.1.1`;
        expect(() => headingsToSections(input)).toThrow('input has a section');
    });

    test('...', () => {
        const input = `# 1
..
..
..

## 1.1
..
..
..

## 1.2
..
..

### 1.2.1
..
..

## 1.3
..
..

### 1.3.1
..
..

### 1.3.2
..
..

#### 1.3.2.1
..
..

#### 1.3.2.2
..
..

##### 1.3.2.2.1
..
..

##### 1.3.2.2.2
..
..

# 2
..
..
..

## 2.1
..
..

## 2.2
..
..

### 2.2.1
..
..

### 2.2.2
..
..

#### 2.2.2.1
..
..

#### 2.2.2.2
..
..

##### 2.2.2.2.1
..
..

##### 2.2.2.2.2
..
..

# 3
..
..
..

## 3.1
..
..

## 3.2
..
..

### 3.2.1
..
..

### 3.2.2
..
..

#### 3.2.2.1
..
..

#### 3.2.2.2
..
..

##### 3.2.2.2.1
..
..

##### 3.2.2.2.2
..
..

# 4
..
..
..

## 4.1
..
..

## 4.2
..
..

### 4.2.1
..
..

### 4.2.2
..
..

#### 4.2.2.1
..
..

#### 4.2.2.2
..
..

##### 4.2.2.2.1
..
..

##### 4.2.2.2.2
..
..

# 5
..
..
..

## 5.1
..
..

## 5.2
..
..

### 5.2.1
..
..

### 5.2.2
..
..

#### 5.2.2.1
..
..

#### 5.2.2.2
..
..

##### 5.2.2.2.1
..
..

##### 5.2.2.2.2
..
..`;

        const output = `
# Section 1
# 1
..
..
..


# Section 1.1
## 1.1
..
..
..


# Section 1.2
## 1.2
..
..


# Section 1.2.1
### 1.2.1
..
..


# Section 1.3
## 1.3
..
..


# Section 1.3.1
### 1.3.1
..
..


# Section 1.3.2
### 1.3.2
..
..


# Section 1.3.2.1
#### 1.3.2.1
..
..


# Section 1.3.2.2
#### 1.3.2.2
..
..


# Section 1.3.2.2.1
##### 1.3.2.2.1
..
..


# Section 1.3.2.2.2
##### 1.3.2.2.2
..
..


# Section 2
# 2
..
..
..


# Section 2.1
## 2.1
..
..


# Section 2.2
## 2.2
..
..


# Section 2.2.1
### 2.2.1
..
..


# Section 2.2.2
### 2.2.2
..
..


# Section 2.2.2.1
#### 2.2.2.1
..
..


# Section 2.2.2.2
#### 2.2.2.2
..
..


# Section 2.2.2.2.1
##### 2.2.2.2.1
..
..


# Section 2.2.2.2.2
##### 2.2.2.2.2
..
..


# Section 3
# 3
..
..
..


# Section 3.1
## 3.1
..
..


# Section 3.2
## 3.2
..
..


# Section 3.2.1
### 3.2.1
..
..


# Section 3.2.2
### 3.2.2
..
..


# Section 3.2.2.1
#### 3.2.2.1
..
..


# Section 3.2.2.2
#### 3.2.2.2
..
..


# Section 3.2.2.2.1
##### 3.2.2.2.1
..
..


# Section 3.2.2.2.2
##### 3.2.2.2.2
..
..


# Section 4
# 4
..
..
..


# Section 4.1
## 4.1
..
..


# Section 4.2
## 4.2
..
..


# Section 4.2.1
### 4.2.1
..
..


# Section 4.2.2
### 4.2.2
..
..


# Section 4.2.2.1
#### 4.2.2.1
..
..


# Section 4.2.2.2
#### 4.2.2.2
..
..


# Section 4.2.2.2.1
##### 4.2.2.2.1
..
..


# Section 4.2.2.2.2
##### 4.2.2.2.2
..
..


# Section 5
# 5
..
..
..


# Section 5.1
## 5.1
..
..


# Section 5.2
## 5.2
..
..


# Section 5.2.1
### 5.2.1
..
..


# Section 5.2.2
### 5.2.2
..
..


# Section 5.2.2.1
#### 5.2.2.1
..
..


# Section 5.2.2.2
#### 5.2.2.2
..
..


# Section 5.2.2.2.1
##### 5.2.2.2.1
..
..


# Section 5.2.2.2.2
##### 5.2.2.2.2
..
..`;
        expect(headingsToSections(input)).toEqual(output);
    });

    test('first level is not h1', () => {
        const input = [
            '### 1',
            '...',
            '#### 1.1',
            '...',
            '### 2',
            '...',
            '#### 2.1',
            '...',
        ].join('\n');

        const output = [
            '',
            '# Section 1',
            '### 1',
            '...',
            '',
            '# Section 1.1',
            '#### 1.1',
            '...',
            '',
            '# Section 2',
            '### 2',
            '...',
            '',
            '# Section 2.1',
            '#### 2.1',
            '...',
        ].join('\n');
        expect(headingsToSections(input)).toEqual(output);
    });

    test('first level is not h1 (2)', () => {
        const input = `### H3
###### H6 
#### H4
## H2`;

        const output = `
# Section 1
## H3

# Section 1.1
### H6 

# Section 1.2
### H4

# Section 2
## H2`;
        expect(headingsToSections(input)).toEqual(output);
    });

    test('first level is not h1 (3)', () => {
        const input = `## H2

text 1
#### H4


text 2
### H3

text 3`;

        const output = `
# Section 1
## H2

text 1

# Section 1.1
### H4


text 2

# Section 1.2
### H3

text 3`;
        expect(headingsToSections(input)).toEqual(output);
    });

    test('weird bug', () => {
        const input = `## H2

### H3

text 1

### H3

text 2
#### H4

- item 1.
- item 2
- item 3`;
        const output = `
# Section 1
## H2


# Section 1.1
### H3

text 1


# Section 1.2
### H3

text 2

# Section 1.2.1
#### H4

- item 1.
- item 2
- item 3`;
        expect(headingsToSections(input)).toEqual(output);
    });
});
