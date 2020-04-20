import React from "react";
//import Button from 'react-bootstrap/Button';
//import    from 'react-bootstrap/';
import {
  Jumbotron,
  Modal,
  Card,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";


//jumbotron needs filled, buttons need centered, weird br thing route from cupcake needs taken off, delete unddeded recipe.md

const RecipeVideos = () => {
  return (
    <Container className="d-flex flex-column">
      <div>
        <Jumbotron fluid style={{backgroundColor:"#FFC107"}}>
          <Container fluid>
            <h1 className="text-center">Let's Get Cooking!</h1>
          </Container>
        </Jumbotron>
      </div>

      <Row>
        <Col lg={4} className="video-container 1">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/DqhqIfHww7g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header>
            </Card.Header>

            <Card.Body>
      <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Click for Ingredients and Instructions
</Button>
            </Card.Body>
          </Card>

    

          <Modal>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <Button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </Button>
                  </div>
                  <div class="modal-body">
                    Scrambled eggs
                  <hr />
                  Take 3 eggs, 2 tbsp of milk combine and wisk stove to light
                  heat pour eggs onto pan scramble eggs
                  <hr />
                  2 Ingredient Banana Pancakes
                  <hr />
                  Take 1 banana and mash into a bowl with 2 eggs. Wisk and scoop
                  into a hot pan. Flip when ready, enjoy!
                  <hr />
                  Semi-Homemade Sticky Buns
                  <hr />
                  Take a muffin tin, place 1 slice of butter, 1 tbsp of brown
                  sugar and a handful of chopped pecans in each tin. Add 1
                  biscuit from a can of niscuits into each tin, press firmly.
                  Bake at 350 degrees for 8 minutes.
      </div>
                  <div class="modal-footer">
                    <Button type="button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
                    <Button type="button" class="btn btn-primary">Save changes</Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>



        </Col>
        <Col lg={4} className="video-container 2">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/FcKvYl-GaAA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header>
            </Card.Header>

            <Card.Body>
      <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Click for Ingredients and Instructions
</Button>
            </Card.Body>
          </Card>

    

          <Modal>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <Button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </Button>
                  </div>
                  <div class="modal-body">
                  "Sugar Cookie Pizza"
                  <hr />
                  ½ cup unsalted butter, 1 stick, softened 1 ½ teaspoons vanilla
                  extract, divided ½ cup granulated sugar 3 tablespoons light
                  brown sugar 1 large egg, room temperature 1 ½ cups all-purpose
                  flour 1 teaspoon cream of tartar ½ teaspoon baking soda 1
                  pinch salt 6 oz cream cheese, room temperature ⅓ cup powdered
                  sugar ⅓ cup chocolate hazelnut spread OPTIONAL TOPPINGS
                  <hr />
                  1 cup fresh berries peanut butter mini pretzel ½ cup fruit
                  cereal
                  <hr />
                  Preparation
                  <hr />
                  Preheat the oven to 350˚F (180˚C). Line a 10-inch (25-cm) cast
                  iron pan with parchment paper. In a large bowl, mix the butter
                  with 1 teaspoon of vanilla extract until light and fluffy. Add
                  the granulated sugar, then the brown sugar, and mix until well
                  incorporated. Add the egg and stir until thoroughly
                  incorporated. Using a fine mesh sieve, sift the flour, cream
                  of tartar, baking soda, and salt into the dough. Combine with
                  a spatula until evenly mixed. Spread the cookie dough in an
                  even layer in the prepared pan. Chill in the fridge for 30
                  minutes, then bake for 15-18 minutes until lightly golden. Let
                  cool. In a medium bowl, combine the cream cheese, powdered
                  sugar, and remaining ½ teaspoon of vanilla extract until well
                  incorporated. Spread half of the frosting onto a quarter of
                  the cooled cookie and the other half on the diagonally
                  opposite corner. Frost the other quarters with the chocolate
                  hazelnut spread. Decorate with your favorite toppings. Enjoy!
                  <hr />
                  Cheesy Taco Breadsticks
                  <hr />
                  1 small onion, diced 1 tablespoon garlic, minced 1 lb ground
                  beef 2 tablespoons taco seasoning 1 lb pizza dough, rolled out
                  into a rectangle 1 cup mexican cheese blend 1 tablespoon olive
                  oil salsa, for dipping guacamole, for dipping
                  <hr />
                  Preparation
                  <hr />
                  Sauté onions and garlic until transparent. Add the ground beef
                  and taco seasoning. Cook until browned. Remove from heat and
                  set aside. Preheat oven to 425˚F (220˚C). On a floured
                  surface, cut the pizza dough into 5 strips and place spoonfuls
                  of the beef mixture into the middle of each strip, followed by
                  the Mexican cheese blend. Fold and pinch the dough around the
                  cheese and meat along the entire strip, ensuring to close off
                  the ends. Brush each breadstick with olive oil and transfer to
                  a baking sheet. Bake for 10 minutes. Remove from the oven and
                  top each breadstick with more cheese. Bake for another 5
                  minutes or until the cheese is golden brown. Enjoy!
                  <hr />
                  Aquarium Cookies
                  <hr />
                  4 oz unsalted butter, softened ½ cup sugar 1 egg 2 cups flour
                  20 pieces hard candy sprinkle, to taste ¼ cup white chocolate,
                  melted
                  <hr />
                  Preparation
                  <hr />
                  In a medium bowl, mix softened butter and sugar until smooth.
                  Add the egg and stir well to combine. Sift in the flour and
                  fold until fully incorporated. Cover the dough with plastic
                  and rest in a fridge for at least 30 minutes. Preheat the oven
                  to 350˚F (180˚C).Sprinkle flour on the work surface and
                  rolling pin so the dough won’t stick. Roll out the dough to ¼-
                  to ⅛-inch (6- to 3-mm) thickness. Using a 3-inch (7-cm) round
                  cookie cutter, cut out the dough. Cut out center of each
                  cookie with using a 2-inch (5-cm) round cookie cutter. Place
                  the cookie on a parchment-lined baking sheet and bake for 10
                  minutes. Take out the sheet from the oven and place hard
                  candies in the center of each cookies. Bake for 3-5 minutes or
                  until the hard candy melts and spreads out. Let the cookies
                  cool completely. In a microwave-safe bowl, melt the white
                  chocolate, about 10-15 seconds. For the bottom cookies, add
                  your favorite sprinkles onto the hard candy. Take the top
                  cookies and drizzle melted chocolate around the rims.
                  Immediately sandwich the 2 cookies and set in fridge for 15
                  minutes. Enjoy!
                  <hr />
                  Animal Pancakes
                  <hr />
                  6 cups pancake mix, prepared strawberry, for decoration
                  blueberry, for decoration banana, for decoration chocolate
                  chip, for decoration maple syrup, to top, optional
                  <hr />
                  Preparation
                  <hr />
                  pare pancake mix per box instructions. Heat a nonstick pan or
                  pancake griddle on medium heat. For large pancakes, pour 1 cup
                  (235 ml) of batter onto the pan. For small pancakes, pour a
                  little less than ¼ cup (60 ml) of batter onto the pan. For
                  medium pancakes, pour ⅓ cup (80 ml) of batter onto the pan.
                  Allow to cook until bubbles form and begin to pop all around
                  the pancake. The pancake will also lose its shiny sheen and
                  begin to look more matte. Flip and cook on the other side for
                  2-3 minutes, or until the bottom is lightly browned.
                  <hr />
                  Hidden Vegetable Macaroni and Cheese
                  <hr />
                  1 lb elbow macaroni, cooked al dente ½ cup water 1 cup
                  cauliflower florets 1 cup butternut squash, diced 1 cup
                  carrot, sliced 2 cups milk 2 cups cheddar cheese, shredded 4
                  oz cream cheese
                  <hr />
                  Preparation
                  <hr />
                  Add water, cauliflower, squash, and carrots in a pot over
                  medium heat. Cover and cook until vegetables are tender. Add
                  everything into a blender, including cooking water, and blend
                  until smooth. Return blended veggies to the pot over medium
                  heat, and add the milk, cheese, and cream cheese. Stir until
                  smooth. Add macaroni, reduce heat, mix thoroughly, and cover
                  for 20 minutes. Enjoy!
                  <hr />
                  Super Soft Banana Bread Cookies
                  <hr />
                  ½ cup sugar ¼ cup brown sugar 1 teaspoon vanilla extract ½ cup
                  butter, softened ½ cup greek yogurt 1 egg 2 ripe bananas 2 ½
                  cups flour ½ teaspoon baking powder ½ teaspoon baking soda 1
                  pinch salt 2 teaspoons cinnamon ½ cup chocolate chips
                  <hr />
                  Preparation
                  <hr />
                  Preheat oven to 350˚F (180˚C). In a bowl, whisk sugar, brown
                  sugar, vanilla extract, and butter together until creamy. Add
                  Greek yogurt, egg, and bananas. Mash bananas and mix
                  thoroughly. Gently fold in the flour, baking powder, baking
                  soda, salt, and cinnamon just until combined. Add chocolate
                  chips and stir in gently. Like a baking sheet with parchment
                  paper and place spoonfuls of dough 2 inches (5 cm) apart.
                  SCROLL FOR MORE CONTENT Bake for 15 minutes and cool on a
                  cooling rack. Enjoy!
                  <hr />
                  Unicorn Cheesecake
                  <hr />
                  FILLING 48 oz cream cheese 1 cup sugar 2 tablespoons vanilla
                  extract 2 cups milk 2 tablespoons gelatin food coloring, blue,
                  purple, and pink
                  <hr />
                  CRUST 20 graham crackers 4 tablespoons unsalted butter ⅓ cup
                  sugar
                  <hr />
                  UNICORN HORNS: 9 mini waffle cones 2 cups white chocolate,
                  melted sprinkle, pink and blue
                  <hr />
                  FOR GARNISH: sprinkle gumball swirl lollipop
                  <hr />
                  Preparation
                  <hr />
                  Make the filling: In a large bowl, use an electric hand mixer
                  to combine the cream cheese, sugar, and vanilla. Microwave the
                  milk for 2 minutes and mix with the gelatin. Add to the cream
                  cheese mixture. Separate the batter into 3 medium bowls. Add a
                  drop of food coloring to each bowl and stir to combine. Make
                  the crust: Add the graham crackers to a zip-top plastic bag
                  and use a rolling pie to crush until they resemble coarse
                  sand. Transfer to a medium bowl and add the butter and sugar.
                  Mix until thoroughly combined. Press into a greased 8-inch
                  springform pan and chill. r the blue batter into the graham
                  cracker crust and refrigerate for 30 minutes, or until firm.
                  Add the purple batter, and refrigerate for another 30 minutes.
                  Add the pink batter, and refrigerate for 60 minutes more. To
                  make the unicorn horns, dip each waffle cone into the white
                  chocolate, top with sprinkles, and chill until firm. Top the
                  cheesecake with the sprinkles, unicorn horns, gumballs, and
                  the lollipop. Enjoy!
                    
      </div>
                  <div class="modal-footer">
                    <Button type="button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
                    <Button type="button" class="btn btn-primary">Save changes</Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>



        </Col>
        <Col lg={4} className="video-container 3">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/zrXWIWlF5_M"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header>
            </Card.Header>

            <Card.Body>
      <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Click for Ingredients and Instructions
</Button>

            </Card.Body>
          </Card>
 <Modal>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <Button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </Button>
                  </div>
                  <div class="modal-body">

                  Brown Paper popcorn
                  <br />
                  1/3 cup of popcorn 1 paper bag
                  <br />
                  Preparation
                  <br />
                  Microwave 1/3 cup popcorn in a brown paper bag (folding down
                  the corners of the bag so it doesn't open) for about 2.5
                  minutes. When popping slows down, remove. Be sure to monitor
                  so nothing burns.
                  <br />
                  Pop tarts
                  <br />
                  Unroll a can of crescent rolls, keeping them as rectangles.
                  Pinch the seems closed. Spoon about 1 tablespoon jam in the
                  center of rectangle, leaving about 1/4 inch empty along the
                  edges. Place another rectangle on top and crimp edges with a
                  fork. Bake at 425 for about 8-10 minutes.
                  <br />
                  Fruit Dip
                  <br />
                  Mix ¼ cup greek yogurt, ¼ cup almond butter, 1 tbsp honey, ¼
                  tsp cinnamon, ¼ tsp vanilla in a small bowl. Dip strawberries
                  and apples!
                  <br />
                  Hummus Cocktail
                  <br />
                  Scoop hummus into plastic cup. Optional Vegetables - Carrots,
                  Bell Pepper, Cucumber etc
                  <br />
                  Mug Cake
                  <br />
                  Mix 1 tbsp cocoa powder, 3 tbsp flour, 1/8 tsp salt, 1/4 tsp
                  baking powder, 1 tbsp sugar, 3 tsp coconut or vegetable oil, 3
                  tbsp milk, 1/2 tsp pure vanilla extract and 1 tbsp
                  kid-friendly protein powder in a bowl. Pour into a mug and
                  microwave for 1-1.5 minutes.
                  
      </div>
                  <div class="modal-footer">
                    <Button type="button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
                    <Button type="button" class="btn btn-primary">Save changes</Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

        </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
        <Col lg={4} className="video-container 4">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/vrpof_QQUe0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header>
            </Card.Header>

            <Card.Body>
      <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Click for Ingredients and Instructions
</Button>
            </Card.Body>
          </Card>

    

          <Modal>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <Button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </Button>
                  </div>
                  <div class="modal-body">
                  Two Ingredient Chocolate Cake
                  <hr />
                  4 eggs, whites and yolks separated 9 oz semi sweet chocolate
                  powdered sugar, to serve vanilla ice cream, to serve seasonal
                  fruit, to serve
                  <hr />
                  Preparation
                  <hr />
                  Heat the oven to 325˚F (170˚C). Place the chocolate in a
                  microwave-safe bowl and melt completely, about 1 minute.
                  Separate the egg yolks and egg whites. Using a hand mixer,
                  whisk the whites until soft peaks form. Add the yolks, one by
                  one, into the bowl of chocolate, whisking to combine. Using a
                  rubber spatula, gently fold ⅓ of the whipped egg whites into
                  the yolk and chocolate mixture. Repeat with the remaining egg
                  whites, adding ⅓ at a time. Pour the batter in a greased
                  6-inch (15 cm) cake mold. Bake for 30 minutes. Once the cake
                  is cool to the touch, gently invert it onto a plate. Optional:
                  Sprinkle with powdered sugar, slice and serve top with ice
                  cream. Serve with seasonal fruit. Enjoy!
                  <hr />
                  Two Ingredient Strawberry Sorbet
                  <hr />
                  1 lb strawberry ¼ cup honey
                  <hr />
                  Preparation
                  <hr />
                  Hull the strawberries by using a straw to push out the stem of
                  each strawberry. Cut strawberries in half and place on a
                  parchment paper-lined baking sheet and freeze until hardened.
                  Add the frozen strawberries and honey to a food processor and
                  combine until evenly mixed. Transfer to a loaf pan and
                  transfer to freezer until completely frozen. Enjoy!
                  <hr />
                  Two ingredient Pasta
                  <hr />
                  1 cup shredded mozzarella cheese 1 egg yolk
                  <hr />
                  Preparation
                  <hr />
                  Add the mozzarella to a bowl and microwave for 1-2 minutes,
                  until melted. Allow the mozzarella to cool for 30 seconds.
                  With a spatula, gently fold the egg yolk into the cheese. Turn
                  the mixture out onto a parchment paper-lined baking sheet.
                  Place another piece of parchment paper on top of the dough and
                  press down with your hand until thin. Remove the top piece of
                  parchment and cut the dough into thin strips. Place the
                  “pasta” on a rack and refrigerate for four hours or overnight.
                  Place the “pasta” in boiling water for one minute. Drain into
                  a colander and run cool water over the pasta to prevent
                  sticking. Serve with your favorite sauce and toppings. Enjoy!
                  <br />
                  Two Ingredient flatbread
                  <br />
                  Preparation
                  <br />
                  1 cup whole fat greek yogurt 1 cup self-rising flour, plus
                  more for dusting In a large bowl, mix together yogurt and
                  flour until it forms a smooth dough. Transfer the dough to a
                  floured surface. Divide into 4 equal parts. Roll out each
                  piece of dough to about 8 inches (20 cm) in diameter, using
                  plenty of flour to prevent sticking or tearing. Cook the bread
                  in a dry pan over medium-high heat for 2-4 minutes per side,
                  until golden brown and cooked through. Enjoy! Two Ingredient
                  Chocolate Souffle
                  <br />
                  ½ cup chocolate hazelnut spread 2 eggs
                  <br />
                  Preparation
                  <br />
                  Preheat the oven to 375˚F (190˚C). Separate the egg yolks from
                  the egg whites and place into two bowls. Mix the chocolate
                  hazelnut spread into the bowl with the egg yolks. In the
                  second bowl, whisk 2 egg whites until stiff peaks form. Fold ⅓
                  of the whipped egg whites into the chocolate/egg yolk mixture
                  until fully incorporated. Add the remaining egg whites to the
                  mixture and fold gently, but thoroughly, until the mixture is
                  smooth. Pour the mixture into a greased ramekin. Clean the
                  rims so the soufflé rises evenly, and bake for 15-17 minutes.
                  Serve immediately. Enjoy!
      </div>
                  <div class="modal-footer">
                    <Button type="button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
                    <Button type="button" class="btn btn-primary">Save changes</Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
</Col>
      
        <Col lg={4} className="video-container 5">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/fuEkA9rG_nI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header>
            </Card.Header>

            <Card.Body>
      <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Click for Ingredients and Instructions
</Button>
            </Card.Body>
          </Card>

    

          <Modal>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <Button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </Button>
                  </div>
                  <div class="modal-body">
                  Yummy Fluffy Vanilla Cupcakes
                  <br />
                  self raising flour 200 grams (7/8th of a cup) 200 grams of
                  castor sugar(7/8th of a cup) 200 grams of unsalted butter-
                  room temp(7/8th of a cup) 4 eggs vanilla extract 1 tsp
                  <br />
                  Preparation
                  <br />
                  Pour Castor sugar in large mixing bowl first, then add
                  unsalted butter into the bowl. Mix for 60 seconds at high
                  speed. sift the 200 grams (7/8th of a cup) of self-rasing
                  flour into the bowl with the castor sugar and butter, Crack 4
                  eggs into bowl. Mix on slow for 30 seconds. Add in vanilla -
                  mix for 30 seconds on low. Take cupcake pan, fill each cup
                  with 2 tbsp of mixture. Place into 340 degree oven for 16-17
                  minutes. Let cool for 20 minutes before icing.
      </div>
                  <div class="modal-footer">
                    <Button type="button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
                    <Button type="button" class="btn btn-primary">Save changes</Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

        </Col><Col lg={4} className="video-container">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/CpDqOH3uyAI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header>
            </Card.Header>

            <Card.Body>
      <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Click for Ingredients and Instructions
</Button>
            </Card.Body>
          </Card>
  <Modal>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <Button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </Button>
                  </div>
                  <div class="modal-body">
                  Ice Cream Sandwich Cake Whipped Cream
                  <br />
                  2 cups (or one container) whipping cream 3 tablespoons
                  powdered sugar approximately 3 teaspoons vanilla Cake
                  <br />
                  12 ice cream sandwiches 12 oz container cool whip or homemade
                  whipped cream M&Ms (or chocolate candy of choice) Fudge
                  topping
                  <br />
                  Preparation
                  <br />
                  In an electric mixer with a whisk attachment (or large bowl
                  with hand mixer) add whipping cream and vanilla, mix starting
                  on low and move it to a medium-high speed until you have soft
                  peaks. Add in powdered sugar and mix until you have medium
                  peaks. Set aside. Unwrap and place 4 ice cream sandwiches on
                  your serving plate. Add two large scoops of whipped cream on
                  top of the ice cream sandwiches and smooth out until flat. Add
                  candies and drizzle fudge sauce (heat in microwave for about
                  20 seconds if not drizzling well). Repeat for 2 more layers
                  Freeze for about 3 hours (or as long as you can wait!)
                  <br />
                  Semi Homemade Cannoli:
                  <br />
                  - 2 cups Ricotta (one 16 oz container (full fat) - 1/3 cup
                  plus 2 tablespoons powdered sugar - 1/4 cup whipped cream
                  (left over from ice cream sandwich recipe) - 1/2 teaspoon
                  cinnamon
                  <br />
                  Preparation
                  <br />
                  Whisk ricotta. Add in powdered sugar and whisk. Add cinnamon
                  and continue to whisk Fold in whipped cream with a spatula Add
                  chocolate chips Fill piping bag with mixture using a large
                  piping tip Pipe filling into a cone, going above the edge.
                  Sprinkle chocolate chips on top and serve NOTE: Best to
                  assemble right before serving, or you can refrigerate for 15
                  min, but any longer and the cones will get soggy.
                  <br />
                  Raspberry Mousse:
                  <br />
                  *amounts are all to taste* - Unsweetened greek yogurt (5%) -
                  about 2 tsp Honey (or maple syrup) - Lime - frozen raspberries
                  - Mini chocolate chips
                  <br />
                  Preparation
                  <br />
                  Mix honey into yogurt Squeeze lime and stir. Stir in frozen
                  raspberries, smushing them to release their juices. Mix in
                  chocolate chips. Freeze for 30 minutes. Stir. Freeze again for
                  15 min longer. Serve!
      </div>
                  <div class="modal-footer">
                    <Button type="button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
                    <Button type="button" class="btn btn-primary">Save changes</Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          </Col>
</Row>
</Container>
  );
};
export default RecipeVideos;
