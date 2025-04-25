import "./income.css";
import incomeGraph from "../../assets/income-graph.png";
export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, 23", id: "1" },
    { amount: 560, date: "Dec 12, 22", id: "2" },
    { amount: 980, date: "Dec 3, 22", id: "3" },
  ];

  return (
    <>
      <main className="incomeMain">
        <header className="incomeHeader">
          <h1>Income</h1>
          <p>
            Last <span className="period">30 days</span>
          </p>
          <h2>$2,260</h2>
        </header>
        <img src={incomeGraph} alt="Income Graph" className="incomeGraph" />
        <section className="incomesArea">
          <span className="incomesAreaTitle">
            <h3>Your transactions (3)</h3>
            <p>
              Last <span>30 days</span>
            </p>
          </span>
          {transactionsData.map((transaction) => (
            <article className="transaction" key={transaction.id}>
              <h3>{transaction.amount}</h3>
              <p>{transaction.date}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
