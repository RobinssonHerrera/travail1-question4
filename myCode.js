function mystere(a, b){
  return a + a + a;
}

function addition(a, b){
  return a + b
}

function multiplication(a, b){
  return a * b;
}

function division(a,b){
  return a/b;
}

function print(operation, a, b) {
  console.log(operation(a, b));
}

print(multiplication, 4, 4);
print(mystere, 2, 4);
print(addition, 3, 4);
