const sesameCharacters = ['Bert', 'Ernie', 'Grover', 'Telly', 'Big Bird', 'Oscar', 'Kermit', 'Elmo'];

const jsxExample = (
  <div>

    {[<p key="1">Bert</p>, <p key="2">Ernie</p>, <p key="3">Grover</p>]}

  </div>
);

{'Bert'}{'Ernie'}{'Grover'}{'Telly'}{'Big Bird'}{'Oscar'}{'Kermit'}{'Elmo'}



const user = {
  name: 'Grant',
  age: 37,
  location: 'Austin'
};

const getLocation = (location) => location
  ? <p>Location: {location}</p>
  : undefined;

const jsxTemplateTwo = (
  <div>
    <h1>User Info</h1>
    <h3>{user.name}</h3>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {user.location ? user.location : undefined}
  </div>
);