function decorate() {
  return (target: any) => {
    target.prototype.extraField = "I'm here!";
  };
}

interface MyClassForKimi {
    extraField: string;
}

@decorate()
class MyClassForKimi {}

const instance = new MyClassForKimi();
console.log(instance.extraField);

