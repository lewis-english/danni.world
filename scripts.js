/* Place your JavaScript in this file */
/*data*/
/* const myArray = ["0","1","2"]*/
document.addEventListener("DOMContentLoaded", () => 
{
  const d = new Date()
  const da = d.getDate()
  const day = da - 1;
  const dataArray = [["LLTUIPEBPSLREULAKAUREVRLLBNDAFSEWOLFRSOOFAERLIDD"],["FRONSRFAAEOECSSONGILOPAARUNNRPATIRKIGMNEAGGEGGNI"],["CHAPHCOSHOOTMEOCHOEELATATFEPEHTAFPTCLDOARAICECFM"],[""],[""],["ADNEFLRNNIRRAEIVIGZYEHOHZARPTTJPRSOOEAIABONIWSRY"],[""],[""],[""],[""],[""],[""],[""],["VALDRAIFETHCGTSNNEEIMTETVSIEFROSNBRULYEAUOOUSRYF"],["HELSIELOOFHTLALWITWIIRTCNDGSALRAHIEKOYTDNICSBERL"],["INELTTHPODRUSELPUSLAOTCOIONIFEEALELASRCARHBASHKW"],
 ["SEOHSHRUNWACMPGNITASKRANRTRNPGAHUACENOLPTRKIOMEE"],["RATIAMPDACTIRMUEHNIEQAMTILTNGENAIOERTRCTIFEGSCNU"],["BKERNSOKFIPSNKFEMEUREOOESAGCRFFWLWIGSISENNEIHWNI"],["ERBOUUCEDRQEONPETSITSSMUGNREMWRVIDERIODHCUNGWSCH"],["TOLCNEHINEDEELIGINSRNNLILELREBIWIONMNONILUEPENEN"],
 ["TOFCOCREKPAAARASREPWTORPODLHWNPROEPIEEOREUCKWSNG"],["RNNROSAUINOBKHAGCRODBNEODIRACOASALBKNENAWSIKDSEN"],["GECHESRNIRTHSOLANEEYTMEANESDIDROASELNSOYBAOICADN"],["LGAITEEHNRSRSEAPQACLGOEURAEHNSITPRHECMOHNXSUBOGA"],["REEBDNOWTMIIPITBETYNGSTEDDAIMVDPBTGIEETEMRRFSNIG"],["AGUTRPBLLAOSUYEITPGLICNAARANIFSERTARUNINUOHGARYC"],["EENOOBTHRAFAACIGFBHIRHESOLNIAENOAFLAIRHERBTNAPZE"],["WAESKIOVSNTGRCTECRITAPHIMIEOTLAOTTSLZPNEASZISDAL"],["NUDEMYSLLMETTERORAOBYKSPNLRWIFHAOERLANCRNLLLEOWA"],["ATEIDTTANSEOSPNTINNKOHGHPIIRETEGSESSLASAPNLILPAI"]]
  const themeArray = ["Nice Aroma","Add a little bit of spice","One lotto hotto choco...","theme4","theme5","I Love You Danni","theme7","theme8","theme9","theme10","theme11","theme12","theme13","Will you be mine for ...?","Places to be","Under the Sea","Joint Hobby","Tuesday Morning Ago","Favourite Passtime","The Day I'm Waiting For","Everything in Line","____ mode","Sponsorship Deal","Geography Whizz","Back to School","Risk it ALl","Around the Continent","Sights in the Savannah.test","55 Burgers 55 Fries","Let's Take A Trip Down","Turn It Up"]
  const wordArray = [["FLOWERS","TULIP","ROSE","DAFFODIL","LAVENDAR","LARKSPUR","BLUEBELL"],["SEASONING","NUTMEG","PAPRIKA","SAFFRON","GINGER","GARLIC","OREGANO"],["COFFEESHOP","HOTCHOCOLATE","MOCHA","MATCHA","ICEDLATTE","FRAPPE"],[""],[""],["ANNIVERSARY","YEAR","PARIS","PHOTOBOOTH","GIRLFRIEND","WINE","JAZZ"],[""],[""],[""],[""],[""],[""],[""],["VALENTINES","LOVE","CARD","GIFTS","FOURTEENTH","FEBRUARY","MISSYOU"],["HOLIDAYS","THEISLEOFWIGHT","CORNWALL","BERLIN","LAKEDISTRICT"],["SEALIFE","DOLPHIN","SEALION","TURTLE","SHARK","OCTOPUS","CRAB","WHALE"],["RUNNING","SHOES","WATCH","PARKRUN","KILOMETRE","GPS","PACE","MARATHON"],["MATHEMATICS","PRIME","INTEGER","QUADRATIC","INTEGRAL","FUNCTION"],["WELCOMEOFFER","FREESPINS","BONUS","WINNING","KKK","FISHIES","WAGER"],["WEDDING","VOWS","RING","DRESS","SUMMER","CHURCH","BOUQUET","RECEPTION"],["ENDINGINLINE","POWERLINE","ONLINE","WASHINGLINE","NUMBERLINE"],["FEATHERS","PENGUIN","PARROT","OWL","SPARROW","PEACOCK","WOODPECKER"],["RUNNINGBRANDS","NIKE","ADIDAS","HOKA","BROOKS","COROS","NEWBALANCE"],["COASTLINE","EROSION","ARCHES","BAY","HEADLAND","SEDIMENT","GROYNES"],["SHAPES","TRIANGLE","SQUARE","CIRCLE","HEXAGON","HEPTAGON","RHOMBUS"],["BETTINGSITES","BETFRED","PADDYPOWER","BETMGM","VIRGIN","MIDNITE"],["COUNTRIES","ITALY","SPAIN","FRANCE","HUNGARY","BULGARIA","PORTUGAL"],["SAFARI","ELEPHANT","GIRAFFE","ZEBRA","LION","CHEETAH","BABOON","RHINO"],["KITCHENSTATIONS","MICROWAVES","SALADETTE","GRILL","POTS","PIZZA"],["MEMORYLANE","DUNSTONHALL","FIREWORKS","CORNWALL","BELLE","PARTY"],["PINKPANTHERESS","TONIGHT","ILLEGAL","STATESIDE","PASSION","PAIN"]]
  const todaysTheme = themeArray[day];
  const todaysArrayData = dataArray[day];
  const todaysData = todaysArrayData[0];
  const todaysWords = wordArray[day];
  const letterArray = todaysData.split("");
  const themeName = document.getElementById("gameName");
  const guessedHintWords = new Array(100).fill(0);
  themeName.innerHTML = todaysTheme;
    for (let i = 0; i < 48; i++)
    {
        const element = document.getElementById(`l${i + 1}`);
        if (element)
        {
            element.textContent = letterArray[i];
        }
    }
  
  let dictionarySet = new Set();  // To store the dictionary for fast lookups

        // Load the dictionary file (data.txt)
        window.onload = () => {
            loadDictionary();
        };

  function loadDictionary() 
  {
            fetch('data.txt')
                .then(response => response.text())
                .then(data => {
                    let words = data.split('\n').map(word => word.trim().toLowerCase());
                    dictionarySet = new Set(words);  // Store words in a Set for fast lookups
                    console.log("Dictionary loaded with " + dictionarySet.size + " words.");
                })
                .catch(error => console.error("Error loading dictionary:", error));
  }
  function checkWord(word) 
  {
            const wordLower = word.toLowerCase();  // Convert to lowercase
            if (dictionarySet.has(wordLower)) {
                return true;
            } else {
                return false;
            }
  }

  var guessWord = ""
  var guessWordHtml = document.getElementById("guessWordDisplay")
  var lastNode = 0;
  var btnState = new Array(49).fill(0)
  btnState[0] = 100;
  var found = 0;
  var hintCount = 0;
  var count = 0;
  const max = todaysWords.length;
  var foundWords = new Array(max).fill(0)
  document.getElementById('wordCount').innerHTML = `${count} out of ${max} theme words`
  
  // Function to be called on click
  function letterClick(num) 
  {
    if (found != 0)
    {
      found = 0
      guessWord = "";
      guessWordHtml.innerHTML = "";
      guessWordHtml.style.color = 'rgba(0,0,0,0.5)'
    }
    
    var tempBtn = document.getElementById(`btn${num}`)
    var tempLetter = document.getElementById(`l${num}`)
    var temptempLetter = tempLetter.innerHTML
    if (btnState[num] ==0)
    {
      if (lastNode==0)
      {
        tempBtn.style.backgroundColor ='rgba(0,0,0,0.5)'
        btnState[num] = 1
        lastNode = num
        guessWord = guessWord + temptempLetter
        guessWordHtml.innerHTML = guessWord
      }
      const val = num - lastNode
      if (val==-7 || val==-6 || val==-5 || val==-1 || val==7 || val==6 || val==5 || val==1)
      {
        tempBtn.style.backgroundColor ='rgba(0,0,0,0.5)'
        btnState[num] = 1
        lastNode = num
        guessWord = guessWord + temptempLetter
        guessWordHtml.innerHTML = guessWord
      }
    }
  }

  // Add event listeners to all buttons with class 'heartShapedButtons'
  const buttons = document.querySelectorAll('.heartShapedButtons');

  buttons.forEach(button => {
    // Extract the number from the button's ID
    const num = button.id.replace('btn', '');
  
    // Attach event listener to each button
    button.addEventListener('click', function() 
    {
      letterClick(num);
    });
  });

  function guessFunction()
  {
    lastNode = 0
      //search for word in word array
      found = 0;
      let index = 100;
      for (let j=0; j < max; j++)
      {
        if ((todaysWords[j])==guessWord)
        {
          found = 4 //temp val to show that found must be 2 or 3
          index = j
          foundWords[index] = 1
        }
      }
      if (found == 4)
      { 
        if (count < max)
        {
          count = count + 1;
          document.getElementById('wordCount').innerHTML = `${count} out of ${max} theme words`
          if (count == max)
          {
            guessWordHtml.innerHTML = "COMPLETE!"
            guessWordHtml.style.color = "rgba(246,38,129,1)"
          }
        }
        if (index == 0)
        {
          found = 3; //span-gram word
          guessWordHtml.style.color = "rgba(160,0,20,1)"
          for (let k=0;k<49;k++)
          {
            if (btnState[k]==1)
            {
              btnState[k] = 3
              const tempo = document.getElementById(`btn${k}`);
              tempo.style.backgroundColor = "rgba(160,0,20,1)"
            }
          }
        }
        if (index!=0)
        {
          found = 2;
          guessWordHtml.style.color = "rgba(225,75,75,1)";
          for (let m=0;m<49;m++)
          {
            if (btnState[m]==1)
            {
              btnState[m]=2
              const tempor = document.getElementById(`btn${m}`)
              tempor.style.backgroundColor = "rgba(225,75,75,1)"
            }
          }
        }
      }
      if (found==0)
      {
        for (let n=0;n<49;n++)
        {
          if (btnState[n]==1)
          {
            btnState[n]=0
            const tempora = document.getElementById(`btn${n}`)
            tempora.style.backgroundColor="rgba(0,0,0,0)"
          }
        }
        if (guessWord.length > 3)
        {
          tempFound = checkWord(guessWord)
          if (tempFound==true)
          {
            let checkIfGuessed = false;
            let tempFlag = false;
            let tempCounter = 0
            while (tempFlag == false)
            {
              if (guessword == guessedHintWords[tempCounter])
              {
                checkIfGuessed = true;
                tempFlag = true;
              }
              else if (guessedHintWords[tempCounter] == 0)
              {
                tempFlag = true;
              }
              else
              {
                tempCounter = tempCounter + 1;
              }
            }
            if (checkIfGuessed == false) // user hasn't already guessed this word
            {  
              found = 1;
              hintCount = hintCount + 1;
              updateHint()
            }
          }
        }
      }
    if (found == 0)
    {
      guessWord="";
      guessWordHtml.innerHTML="";
    }
  }
  
  const myGuess = document.getElementById("guessBox")
  myGuess.addEventListener('click', function() 
    {
      guessFunction();
    });  

  function updateHint()
  {
    if (hintCount==0)
    {
      document.getElementById('hintBox').innerHTML = "Hint";
      //document.getElementById('hintBox').style.borderColor = "rgba(0,0,0,0.8)";
      document.getElementById('hintBox').style.backgroundColor = "rgba(0,0,0,0.2)";
    }
    if (hintCount==1)
    {
      document.getElementById('hintBox').style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    if (hintCount==2)
    {
      document.getElementById('hintBox').style.backgroundColor = "rgba(0,0,0,0.6)";
    }
    if (hintCount > 2)
    {
      document.getElementById('hintBox').style.backgroundColor = "rgba(0,0,0,0.8)";
      //document.getElementById('hintBox').style.borderColor = "rgba(159, 139, 22, 0.8)";
      document.getElementById('hintBox').innerHTML = "Hint!";
      
    }
  }
  function hint()
  {
    if ((hintCount > 2)&&(count < max - 1))
    {
      
     //select first word from back of todaysWords that hasn't been found:

      var conditionMet = false;
      var p = 0;
      var hintWord = "";
      while (conditionMet == false)
      {
        if (foundWords[(max - 1 - p)]==0)
        {
          hintWord = todaysWords[(max - 1 - p)];
          conditionMet = true;
        }
        p = p + 1;
      }
     //form array of numbers and letters of all btns with state 0:
      const unclickedBtns = btnState.reduce((indices, value, currentIndex) => 
      {
        if (value === 0) 
        {
          indices.push(currentIndex);
        }
        return indices;
      }, []);
     //get the indexes of all first letters, second letters,...wordlength
      howMany = unclickedBtns.length;
      unclickedLetters = new Array(howMany).fill("A");
      for (let j=0; j < howMany; j++)
      {
        letterNum = unclickedBtns[j];
        thisLetter = letterArray[letterNum - 1];
        unclickedLetters[j] = thisLetter;
      }
     //form these into an array:
      
      
      // function to find path of the hintWord

      wordPath = findPath(unclickedBtns, unclickedLetters, hintWord);
      if (!(wordPath.includes(0)))
      {
        for (let j=0; j < hintWord.length ; j++)
        { 
          var num = wordPath[j];
          var tempLetter = document.getElementById(`l${num}`);
          tempLetter.style.color = "rgba(159, 139, 22, 0.8)";
        }
      }
      else
      {
        var testHintLetter = document.getElementById(`l20`);
        testHintLetter.style.color = "rgba(159, 139, 22, 0)";
      }

    
      function findPath(butns,lets,myWord)
      {
        const hintN = myWord.length;
        var upperHintWord = myWord.toUpperCase();
        const hintLetters = upperHintWord.split("");
        var myArray = new Array(hintN);  // this is going to store arrays of the positions of each letter in hintWord in unclickedBtns
        var myPath = new Array(hintN).fill(0);
        for (let j=0; j < hintN; j++)   //for each letter in the word
        {
          k = hintLetters[j];
          myArray[j] = lets.reduce((indices, value, currentIndex) => 
          { 
            if (value === k) // if value is the jth letter
            {
              tempIndex = butns[currentIndex];  // position of button associated with unclicked letter
              indices.push(tempIndex);    //add it to the array
            }
            return indices;
          }, []); 
        }

        function findValidRoute(myArray) 
        {
  

          // check specific difference conditions including edge cases for edge of grid
          function isStepValid(prevValue, currentValue, path, pointer) 
          {
            const diff = (prevValue - currentValue);
            const isSame = path.slice(0,pointer).includes(currentValue);
            if (prevValue % 6 == 1)
            {
              //lhs, dont want -7, -1, +5 ,, if rhs, dont want -5, +1, +7
              if (diff === -7 || diff === -1 || diff === 5)
              {
                isSame = true;
              }
            }
            else if (prevValue % 6 == 0)
            {
              if (diff === -5 || diff === 1 || diff === 7)
              {
                isSame = true;
              }        
            }
            diff = Math.abs(diff);
            return (!isSame &&(diff === 1 || diff === 5 || diff === 6 || diff === 7));
          }

            // Recursive function to explore routes
          function solve(index) 
          {
              // Base Case: If we have reached the end of the array (index equals length),
              // we have successfully found a route.
            
            if (index === hintN) 
            {
              return true;
            }

                // Get the available integers for the current position
            const candidates = myArray[index];

                // Loop through every candidate in the current sub-array
            for (let i = 0; i < candidates.length; i++) 
            {
              const val = candidates[i];

                 // Check if this value is valid. 
                 // It is valid if it's the very first item or if condition is true for difference
              if (index === 0 || isStepValid(myPath[index - 1], val, myPath, index)) 
              {
                
                      // temporarily place the value in the path
                myPath[index] = val;

                      // solve for the next index
                if (solve(index + 1)) 
                {
                  return true; // A solution was found further down
                }
              }
            }

                      // If tried all candidates and none work, return false to trigger backtracking
            return false;
          }

            // Start the search at index 0
          if (solve(0)) 
          {
            return myPath;
          } 
          else 
          {
            console.log("No valid route found.");
            return null;
          }
        }
        result = findValidRoute(myArray);
        return result;
     }
     updateHint();
     hintCount = 0;
  }
   
  const myHint = document.getElementById("hintBox")
  myHint.addEventListener('click', function() 
  {
    hint();
  });  
});



