let logged;

// If data is not properly typed it will not compile with noImplicitAny (All params must be declared)
const sendAnalytics = (data: string) => {
  console.log(data);
  logged = true; // It's okay because a certain type is not expected and can be tracked by TS
};

sendAnalytics("The data");
