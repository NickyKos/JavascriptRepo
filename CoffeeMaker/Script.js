function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // boiling water
  async function boilWater() {
    console.log("Boiling water...");
    await delay(3000);
    return "Hot Water";
  }
  
  // brewing coffee
  async function brewCoffee(water) {
    console.log(`Brewing coffee with ${water}...`);
    await delay(2000);
    return "Brewed Coffee";
  }
  
  // pouring coffee 
  async function pourIntoCup(coffee) {
    console.log(`Pouring ${coffee} into cup...`);
    await delay(1000);
    return "Cup of Coffee";
  }
  
  // serving coffee
  async function serveCoffee(cup) {
    console.log(`Your ${cup} is ready! Enjoy!`);
  }
  
  // make coffee 
  async function makeCoffee() {
    const hotWater = await boilWater();
    const coffee = await brewCoffee(hotWater);
    const cup = await pourIntoCup(coffee);
    await serveCoffee(cup);
  }
  
  // start 
  makeCoffee();
  