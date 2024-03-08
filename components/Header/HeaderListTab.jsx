import styles from "./HeaderListTab.module.scss";

const listItems = [
  {
    id: 1,
    name: "AWS Builder",
  },
  {
    id: 2,
    name: "Start Build",
  },
  {
    id: 3,
    name: "Build Supplies",
  },
  {
    id: 4,
    name: "Tooling",
  },
  {
    id: 5,
    name: "BlueHosting",
  },
];

function HeaderListTab() {
  return (
    <div className={styles.list}>
      <p className={styles.list__title}>Tools</p>
      <ul className={styles.list__list}>
        {listItems.map((el) => (
          <li key={el.id} className={styles.list__item}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderListTab;
