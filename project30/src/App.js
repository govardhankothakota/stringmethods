import logo from "./logo.svg";
import "./App.css";

function App() {
  let baahubali1 = `            In "Baahubali: The Beginning," Shivudu, a man raised by villagers, discovers his true identity as Mahendra Baahubali, the son of the legendary warrior Amarendra Baahubali,after climbing a towering waterfall and meeting the warrior Avanthika.Shivudu joins her mission to rescue Devasena, the captive queen,and learns about the betrayal and usurpation of the throne by the tyrant Bhallaladeva. Determined to reclaim his kingdom, Mahendra sets out to overthrow Bhallaladeva and liberate Mahishmati.                 `;

  let baahubali2 = `         In "Baahubali: The Conclusion," Mahendra Baahubali learns about his father Amarendra Baahubali’s noble rule and his betrayal by Bhallaladeva, who usurped the throne and imprisoned Devasena. Guided by his mother’s stories, Mahendra rallies the people of Mahishmati to overthrow the tyrant Bhallaladeva and avenge his father's murder. In an epic final battle, Mahendra defeats Bhallaladeva, restores justice, and reclaims the throne of Mahishmati.`;
  return (
    <div className="App">
      <h2>String Methods</h2>
      <button
        onClick={() => {
          console.log(baahubali1.length);
          console.log(baahubali2.length);
        }}
      >
        length
      </button>
      <button
        onClick={() => {
          console.log(baahubali1.toUpperCase());
        }}
      >
        ToUpperCase
      </button>
      <button
        onClick={() => {
          console.log(baahubali2.toLowerCase());
        }}
      >
        ToLowerCase
      </button>
      <button
        onClick={() => {
          console.log(baahubali1.concat(baahubali2));
        }}
      >
        Concat
      </button>
      <button
        onClick={() => {
          console.log(`==>${baahubali1.trimStart()}<==`);
          console.log(`==>${baahubali1.trimEnd()}<==`);
          console.log(`==>${baahubali1.trim()}<==`);
        }}
      >
        Trim Start/Trim End/Trim
      </button>
      <button
        onClick={() => {
          console.log(baahubali1.padStart(542, "Prabhas is Shivudu"));
        }}
      >
        PadStart
      </button>
      <button
        onClick={() => {
          console.log(baahubali1.padEnd(544, "Rana is Bhallaladeva"));
        }}
      >
        PadEnd
      </button>
      <button
        onClick={() => {
          let jaganSlogan = "Why Not 175 ? ";
          console.log(jaganSlogan.repeat(11));
        }}
      >
        Repeat
      </button>
      <button
        onClick={() => {
          console.log(baahubali1);
          console.log(baahubali1.replace("Shivudu", "Prabhas"));
          console.log(baahubali1.replaceAll("Shivudu", "Prabhas"));
        }}
      >
        Replace/ReplaceAll
      </button>
      <button
        onClick={() => {
          console.log(baahubali2.split("Baahubali"));
          console.log(baahubali2.split(" "));
        }}
      >
        Split
      </button>
      <button
        onClick={() => {
          let shivuduPlan = `Shivudu joins her mission to rescue Devasena`;

          console.log(shivuduPlan.slice(36, 44));
          console.log(shivuduPlan.substring(18, 25));
          console.log(shivuduPlan.substr(29, 6));
        }}
      >
        Slice/SubString/SubStr
      </button>
      <button
        onClick={() => {
          console.log(baahubali1.at(16));
          console.log(baahubali1.charAt(17));
          console.log(baahubali1.at(18));
          console.log(baahubali1.charAt(19));
          console.log(baahubali1.at(20));
          console.log(baahubali1.charAt(21));
          console.log(baahubali1.at(22));
          console.log(baahubali1.charAt(23));
          console.log(baahubali1.charAt(24));
        }}
      >
        At/CharAt
      </button>
      <button
        onClick={() => {
          let baahubaliTitle = "బాహుబలి,बाहुबलि,バーフバリ,باهوبالي";
          for (let a = 0; a < baahubaliTitle.length; a++) {
            console.log(
              `${baahubaliTitle.at(a)}===>${baahubaliTitle.charCodeAt(a)}`
            );
          }
        }}
      >
        CharCodeAt
      </button>
      <button
        onClick={() => {
          for (let i = 2308; i <= 2435; i++) {
            console.log(`${i} . ${String.fromCharCode(i)}`);
          }
        }}
      >
        FromCharCode
      </button>
      <button
        onClick={() => {
          let movieDirector = "Director : SS.Rajamouli Sir";
          let actors = "Actor : Prabhas Sir";

          console.log(movieDirector.startsWith("Director"));
          console.log(movieDirector.includes("SS"));
          console.log(actors.endsWith("Sir"));
        }}
      >
        Starts with/Includes/Ends with
      </button>
      <button
        onClick={() => {
          console.log(baahubali2.indexOf("Baahubali"));
          console.log(baahubali2.lastIndexOf("Baahubali"));
          console.log(baahubali2.indexOf("Bhallaladeva"));
          console.log(baahubali2.lastIndexOf("Bhallaladeva"));
        }}
      >
        Index Of/Last Index Of
      </button>
      <button
        onClick={() => {
          console.log(baahubali1.search(/The/));
          console.log(baahubali1.search(/the/));
          console.log(baahubali1.search(/the/i));
        }}
      >
        Search
      </button>
    </div>
  );
}

export default App;
