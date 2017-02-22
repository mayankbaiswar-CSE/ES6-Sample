function* generator() {
    yield 'p'
    console.log('o')
    yield 'n'
    console.log('y')
    yield 'f'
    console.log('o')
    yield 'o'
    console.log('!')
}

export default generator();