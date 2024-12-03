function createChristmasTree(ornaments, height) {
  const tree = []
  const ornametsList = ornaments.split('')
  let ornamentIndex = 0
  for (let level = 0; level < height; level++) {
    let spaces = height - level - 1
    tree[level] = ''.padStart(spaces, ' ')

    while (spaces < height) {
      tree[level] = tree[level] + ornametsList[ornamentIndex] + ' '
      ornamentIndex++
      if (ornamentIndex >= ornametsList.length) ornamentIndex = 0
      spaces++
    }
    tree[level] = tree[level].trimRight()
  }
  tree[height] = '|'.padStart(height, ' ') + '\n'

  return tree.join('\n')
}

console.log(createChristmasTree('123', 4))
/*
   1
  2 3
 1 2 3
1 2 3 1
   |
*/

console.log(createChristmasTree('*@o', 3))
/*
  *
 @ o
* @ o
  |
*/
