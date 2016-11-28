const styles = {

  // login page

  textSnippet: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  logo: {
    height: 100,
    width: 300
  },


  // profilePage

  profilePage: {
    marginTop: 20
  },
  container: {
    alignItems: 'center',
    margin: 5
  },
  containerFeed: {

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    minHeight: 32
  },
  userName: {
    fontSize: 36,
    fontWeight: '200',
    color: 'gray'
  },
  uiProfilePagePhotoCircularImage: {
    height: 100,
    width: 100
  },
  editNameTitle: {
    fontWeight: '200',
    color: 'gray',
    flex: 1
  },
  inputStyle: {
    color: '#000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 12,
    flex: 1
  },
  smallButtonStyle: {
    flex: 0.1,
    margin: 10
  },
  buttonStyle: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingRight: 15,
    paddingLeft: 15,
    height: 32,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  hideEditButton: {
    height: 0,
    opacity: 0
  },
  navbarContainerStyle: {
    borderWidth: 5,
    borderColor: 'blue',
    borderRadius: 3,
    flex: 1
  },
  hideButton: {
    height: 0,
    opacity: 0
  },

  // feed

  smallMessageText: {
    fontSize: 12,
    fontWeight: '300',
    paddingTop: 10,
    paddingBottom: 10
  },

  // filter-panel
  rowFilterPanel: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    maxHeight: 30
  },
  filterButton: {
    backgroundColor: 'white',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingRight: 10,
    paddingLeft: 10,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonText: {
      fontSize: 12,
      color: 'blue',
      fontWeight: '300',
      paddingTop: 5,
      paddingBottom: 5
  },
  buttonTextSelected: {
      fontSize: 12,
      color: 'white',
      fontWeight: '300',
      paddingTop: 5,
      paddingBottom: 5
  },
  filterButtonSelected: {
    backgroundColor: 'blue',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingRight: 10,
    paddingLeft: 10,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  // notification

  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    // borderBottomWidth: 1,
    // padding: 5,
    // backgroundColor: '#fff',
    // justifyContent: 'flex-start',
    // flexDirection: 'column',
    // borderColor: '#ddd',
    // position: 'relative'
  },
  cardButtonStyle: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  viewedNotificationStyle: {
    backgroundColor: 'red'
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  uiProfilePhotoCircularImage: {
    width: 40,
    height: 40,
    alignSelf: 'center'
  },
  numberOfInvites: {
    fontSize: 10,
    fontWeight: '300',
    color: 'lightgray'
  },
  middleColumn: {
    flex: 3.5,
    paddingBottom: 5
  },
  timestamp: {
    fontSize: 10,
    fontWeight: '300',
    color: 'lightgray'
  },
  subjectName: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  subjectAction: {
    fontSize: 10,
    color: 'gray'
  },
  eventName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray'
  },
  rightColumnFeed: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  date: {
    fontSize: 12,
    fontWeight: '100'
  },
  placeName: {
    fontSize: 12,
    fontWeight: '100'
  },

  // calendarItem

  rightColumnCalendar: {
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  cardTopRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  cardMiddleRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green'
  },
  profileImage: {

  },
  calendarItem: {

  },
  calendarTitle: {
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 3
  },
  coverImage: {
    flex: 1,
    height: 74,
    width: 100
  },

  //create Event

  rowEventDetailsHeader: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'center',
    padding: 15,
  },
  eventDetailTextTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  eventDetailText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    alignSelf: 'center'
  },
  uiEventDetailPhotoCircularImage: {
    width: 40,
    height: 40,
    alignSelf: 'center'
  },
  columnEventDetailTextContainer: {

  },
  dateTimeInput: {

  },
  label: {
    fontSize: 12,
    fontWeight: '300'
  },
  dateInputStyle: {
    color: '#000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 12,
    flex: 1
  },
  timeInputStyle: {
    color: '#000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 12,
    flex: 1
  },

  //invite friends

  rightFloatedContent: {

  },
  uiAvatarImage: {
    width: 40,
    height: 40,
    alignSelf: 'center'
  },
  textfriendName: {
    fontSize: 12,
    fontWeight: '300'
  },
  uiMiddleAlignedViewidedList: {

  },

  //confirm event

  item: {

  },
  content: {

  },
  header: {

  },
  invitedTitle: {

  },
  uiBigHorizontalList: {

  },

  //event details

  inputNote: {

  },
  justify: {

  },

  // router tabbar styling

  tabContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  }

};


export default styles;
