# A Water Bottle

**You can:**

* ``.openBottle()``
* ``.closeBottle()``
* ``.pourBottle()``
* ``.refillBottle()``
* ``.drinkBottle()``

All return a Promise Reject or a Promise Fulfillment, depending on ``this.opened`` and ``this.filled``. Both only return a string and don't return an error object.