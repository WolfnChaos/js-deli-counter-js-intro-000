function takeANumber(line, name) {
  line.push(name);

  let i = 0

  while (i < line.lenght) {
    return `Welcome, ${name[i]}. You are number ${line.lenght} in line.`
    i++;
  }
}
