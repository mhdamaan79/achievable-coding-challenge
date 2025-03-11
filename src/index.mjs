import { displayQuestion } from "./helpers.mjs";

const randomizeQuestion = () => {
  // Generate random values for number of sculptures
  let smallSculpturesEvent1 = Math.floor(Math.random() * 5) + 2; // 2-6
  let largeSculpturesEvent1 = Math.floor(Math.random() * 5) + 1; // 1-5

  let smallSculpturesEvent2 = Math.floor(Math.random() * 5) + 2; // 2-6
  let largeSculpturesEvent2 = Math.floor(Math.random() * 5) + 1; // 1-5

  // Ensure the events have different values
  while (
    smallSculpturesEvent1 === smallSculpturesEvent2 &&
    largeSculpturesEvent1 === largeSculpturesEvent2
  ) {
    smallSculpturesEvent2 = Math.floor(Math.random() * 5) + 2;
  }

  // Generate random prices for small and large sculptures
  const smallPrice = Math.floor(Math.random() * 50) + 50; // $50-99
  const largePrice = smallPrice + Math.floor(Math.random() * 100) + 100; // $150-249

  // Calculate the total costs for each event
  const totalCostEvent1 =
    smallSculpturesEvent1 * smallPrice + largeSculpturesEvent1 * largePrice;
  const totalCostEvent2 =
    smallSculpturesEvent2 * smallPrice + largeSculpturesEvent2 * largePrice;

  // Calculate the answer (price difference)
  const answer = largePrice - smallPrice;

  // Generate wrong answers
  const generateWrongAnswer = () => {
    const variation = Math.floor(Math.random() * 50) - 25; // -25 to +24
    const wrongAnswer = answer + variation;
    return wrongAnswer <= 0 || wrongAnswer === answer
      ? answer + Math.floor(Math.random() * 30) + 10
      : wrongAnswer;
  };

  const wrongAnswers = [];
  while (wrongAnswers.length < 4) {
    const wrong = generateWrongAnswer();
    if (!wrongAnswers.includes(wrong) && wrong !== answer) {
      wrongAnswers.push(wrong);
    }
  }

  // Create the final choices array with the correct answer
  const choices = [...wrongAnswers];
  const answerPosition = Math.floor(Math.random() * 5);
  choices.splice(answerPosition, 0, answer);
  choices.length = 5; // Ensure we have exactly 5 choices

  // Locations
  const locations = [
    "Summerfield",
    "Greenwood",
    "Riverside",
    "Pine Valley",
    "Oakridge",
    "Cedar Falls",
  ];
  let location1 = locations[Math.floor(Math.random() * locations.length)];
  let location2;
  do {
    location2 = locations[Math.floor(Math.random() * locations.length)];
  } while (location2 === location1);

  // Event types
  const eventTypes = [
    "corporate dinner",
    "executive dinner",
    "product launch",
    "annual gala",
    "holiday party",
    "award ceremony",
  ];
  let eventType1 = eventTypes[Math.floor(Math.random() * eventTypes.length)];
  let eventType2;
  do {
    eventType2 = eventTypes[Math.floor(Math.random() * eventTypes.length)];
  } while (eventType2 === eventType1);

  const prompt = `An event planner routinely orders ice sculptures for the corporate events they plan. For an ${eventType1} in ${location1}, they ordered <b>${smallSculpturesEvent1}</b> small ice sculptures and <b>${largeSculpturesEvent1}</b> large ice sculptures, which cost <b>$${totalCostEvent1}</b>. Then, for a ${eventType2} in ${location2}, she ordered <b>${smallSculpturesEvent2}</b> small ice sculptures and <b>${largeSculpturesEvent2}</b> large ice sculpture, which cost a total of <b>$${totalCostEvent2}</b>. What is the price difference, in dollars, between the large and small ice sculptures?`;

  // Format decimal values to 2 places for the explanation
  const ratio1 = (smallSculpturesEvent2 / largeSculpturesEvent2).toFixed(2);
  const ratio2 = (
    (largeSculpturesEvent1 * totalCostEvent2) /
    largeSculpturesEvent2
  ).toFixed(2);
  const ratio3 = (
    (largeSculpturesEvent1 * smallSculpturesEvent2) /
    largeSculpturesEvent2
  ).toFixed(2);

  const diff1 = (
    totalCostEvent1 -
    (largeSculpturesEvent1 * totalCostEvent2) / largeSculpturesEvent2
  ).toFixed(2);
  const diff2 = (
    smallSculpturesEvent1 -
    (largeSculpturesEvent1 * smallSculpturesEvent2) / largeSculpturesEvent2
  ).toFixed(2);

  const explanation = `
Here we see the word "total" used which implies addition. So let's first begin with the ${location1} total cost expression. We know that each size of sculpture has it's own price. Let's use <b>s</b> for small sculptures and <b>L</b> for large sculptures. Each sculpture costs a price. The word each makes us think of multiplication. So we're going to multiply the number of each type of sculpture times its price, and then add them together to get the total. 
<br/>
<br/>
  
${location1}: 

<pre>${totalCostEvent1} = (${smallSculpturesEvent1} &times; s) + (${largeSculpturesEvent1} &times; L)</pre>

${location2}: 

<pre>${totalCostEvent2} = (${smallSculpturesEvent2} &times; s) + (${largeSculpturesEvent2} &times; L)</pre>

Now that we have two equations and two variables, we can solve them as a system of equations. Let's use the substitution method for this problem. 
<br/>
<br/>
First, let's solve ${location2} for <b>L</b>:
  
<pre>${largeSculpturesEvent2}L = ${totalCostEvent2} - ${smallSculpturesEvent2}s</pre>
  
Now let's sub this into the ${location1} equation and solve for <b>s</b>:
  
<pre>
  <div>
  ${totalCostEvent1} = ${smallSculpturesEvent1}s + ${largeSculpturesEvent1} &times; ((${totalCostEvent2} - ${smallSculpturesEvent2}s) / ${largeSculpturesEvent2})
  ${totalCostEvent1} = ${smallSculpturesEvent1}s + ${largeSculpturesEvent1} &times; (${(
    totalCostEvent2 / largeSculpturesEvent2
  ).toFixed(2)} - ${ratio1}s)
  ${totalCostEvent1} = ${smallSculpturesEvent1}s + ${ratio2} - ${ratio3}s
  ${totalCostEvent1} = ${ratio2} + (${smallSculpturesEvent1} - ${ratio3})s
  ${diff1} = ${diff2}s
  s = ${smallPrice}
  </div>
</pre>
  
Now we know the price of the small sculptures, but we're not done! We still need the price of the large sculptures. So let's sub our <b>s</b> that we found back into the ${location2} equation and solve for <b>L</b> again:
  
<pre>
  <div>
    ${totalCostEvent2} = (${smallSculpturesEvent2} &times; ${smallPrice}) + (${largeSculpturesEvent2} &times; L)
    ${largeSculpturesEvent2}L = ${totalCostEvent2} - ${
    smallSculpturesEvent2 * smallPrice
  }
    L = (${totalCostEvent2} - ${
    smallSculpturesEvent2 * smallPrice
  }) / ${largeSculpturesEvent2}
    L = ${largePrice}
  </div>
</pre>
  
  
Finally, we can subtract the two values to find the difference between them:
  
<pre>
  <div>
    L - s = ${largePrice} - ${smallPrice} = ${answer}
  </div>
</pre>
  
So our answer here should be <b>${answer}</b>.`;

  displayQuestion({
    prompt,
    choices,
    answer,
    explanation,
  });

  return {
    prompt,
    choices,
    answer,
    explanation,
  };
};

document
  .querySelector(".randomize-btn")
  .addEventListener("click", randomizeQuestion);

document.querySelector(".refresh-message").hidden = true;

randomizeQuestion();
