import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      "Bearer g8tumcA-WF_jeyAOuORr3sFLafbdBhAMGGQC9DDhbTHJQh-P0iJFdr6rwVdQ2ww2Sh5J9m1i3jO-TV7_L1EORB8W_HOxc5L5VygEaGEnXr7SHtWNXyIJz9yNDADLYHYx",
  },
});
