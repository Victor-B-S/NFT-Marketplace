import classes from "./TabBar.module.css";

function TabBar() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.tab_bar}>
          <hr className={classes.hr}/>
          <div className={classes.tab_bar_center}>
            <div className={classes.tabs}>
              <div className={[classes.tab, classes.active].join(' ')}>
                <div className={classes.tab_text_active}>Created</div>
                <div className={classes.tab_badge_active}>
                  <div className={classes.tab_badge_value_active}>302</div>
                </div>
              </div>
              <div className={classes.tab}>
                <div className={classes.tab_text}>Owned</div>
                <div className={classes.tab_badge}>
                  <div className={classes.tab_badge_value}>67</div>
                </div>
              </div>
              <div className={classes.tab}>
                <div className={classes.tab_text}>Collection</div>
                <div className={classes.tab_badge}>
                  <div className={classes.tab_badge_value}>4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabBar;
