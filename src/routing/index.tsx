import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Auth, Book, Books, Home } from "@/pages";

import Navigation from "@/components/navigation";

export default function Routing() {
  return (
    <Router>
      <Navigation />
      <div className="p-8">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/books/:bookId">
            <Book />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
