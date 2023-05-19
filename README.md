# Speed Run 2023 Round 1 - Angular

J.B. Islands is getting ready for their biggest event of the year, and needs your help
to make sure all the correct supplies have been purchased. To make matters worse, as people
RSVP the amount of food required just keeps going up!

Your task is to organize the data stream into lists our shoppers can use in each part of the
grocery market, using NgRx component stores as the backing data store. The basic display components,
initial fetch API, as well as the asynchronous stream of updates, are already setup for you.

When everything is working, each department should have its own list, and clicking an item should decrement
the amount needed of that item by 1. When an item reaches 0, it should be grayed out and unable to be
decremented further.

Remember, just like in cooking, both speed and quality count. Good luck!

* Note: The data should be fetched with `GroceryApiService` and `GroceryUpdateService`.
To find out what department a food belongs in, use `GroceryCategorizerService`.