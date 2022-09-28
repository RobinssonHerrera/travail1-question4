function addition(a, b){
  return a + b
}

function multiplication(a, b){
  return a * b;
}

function mystere(a, b){
  return a + a + a;
}

function print(operation, a, b) {
  console.log(operation(a, b));
}

print(multiplication, 4, 4);
print(multiplication, 6, 4);
print(mystere, 2, 4);
print(mystere, 3, 4);
print(addition, 4, 4);
print(addition, 5, 4);
