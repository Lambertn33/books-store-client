import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Auth, Book, Books, Home, Order, Orders } from "@/pages";

import { PrivateRoute } from "@/components/PrivateRoute";

import Navigation from "@/components/navigation";

export default function Routing() {
  return (
    <Router>
      <Navigation />
      <div className="p-8">
        <Switch>
          <PrivateRoute path="/orders/:orderId">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
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
