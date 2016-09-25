exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({
          title: 'Are Steve Harrington & Jean Ralphio Really Related?',
          description: 'Disrupt tattooed pickled, pug trust fund prism aute microdosing photo booth ad. Chicharrones etsy crucifix, echo park sint chia tbh seitan brooklyn fap man braid. Tilde odio tote bag, yr mollit fashion axe 90\'s polaroid deserunt organic hexagon fugiat lyft. Marfa gochujang glossier in, magna ugh man braid. Qui brunch kitsch, try-hard assumenda banh mi deep v. Knausgaard paleo literally food truck, wayfarers flannel locavore kickstarter disrupt hammock salvia. Sartorial celiac intelligentsia, duis affogato distillery etsy helvetica flannel raw denim.',
          over_21: 'false',
          start_datetime: '9/22/2016 14:00:00',
          end_datetime: '9/22/2016 15:30:00',
          venue_id: knex('venues').select('id').where('name', 'Steve\'s House')
        }),
        knex('events').insert({
          title: 'The Case for Eggo Waffles',
          description: 'Flexitarian cronut austin, street art anim fashion axe non plaid. Nostrud viral sed, bicycle rights street art next level messenger bag waistcoat hot chicken skateboard elit enamel pin vinyl church-key schlitz. Pariatur sustainable kitsch cray hell of knausgaard in meggings tattooed. Everyday carry portland etsy, hashtag blue bottle scenester bespoke beard 3 wolf moon adipisicing delectus. Small batch williamsburg glossier, cupidatat photo booth intelligentsia snackwave butcher +1. 90\'s beard distillery authentic, gentrify jianbing plaid. Jean shorts selvage tumblr, literally laborum swag ramps single-origin coffee dolor meditation raclette celiac meh cupidatat typewriter.',
          over_21: 'false',
          start_datetime: '9/24/2016 12:00:00',
          end_datetime: '9/24/2016 14:00:00',
          venue_id: knex('venues').select('id').where('name', 'Castle Byers')
        }),
        knex('events').insert({
          title: 'What Happened The Night Barb Went Upside Down',
          description: 'Art party kale chips hell of qui thundercats, portland ramps in scenester hammock gastropub raclette waistcoat tbh ut. Mumblecore velit nisi hoodie, activated charcoal bitters try-hard eiusmod exercitation shabby chic 3 wolf moon culpa. Quinoa echo park assumenda chambray, fixie fingerstache readymade viral cliche. Swag gochujang magna selvage. Pork belly distillery food truck, reprehenderit tacos mumblecore locavore duis disrupt echo park taxidermy vinyl kombucha excepteur. Direct trade master cleanse fashion axe, fap truffaut hashtag skateboard ut selfies lo-fi poutine asymmetrical. Occaecat selvage activated charcoal YOLO, austin irure snackwave you probably haven\'t heard of them live-edge tote bag.',
          over_21: 'true',
          start_datetime: '9/25/2016 20:00:00',
          end_datetime: '9/25/2016 23:00:00',
          venue_id: knex('venues').select('id').where('name', 'Steve\'s House')
        }),
        knex('events').insert({
          title: 'Before There Was Eleven, There Was Ten',
          description: 'Small batch post-ironic banjo butcher. Fashion axe butcher plaid, humblebrag keytar roof party church-key portland flexitarian street art cred listicle. Slow-carb gochujang health goth, semiotics hexagon shoreditch austin shabby chic cred marfa 3 wolf moon. Trust fund hoodie vice tbh PBR&B wayfarers, twee squid 90\'s semiotics tousled waistcoat bespoke green juice. Pabst single-origin coffee cardigan sartorial, enamel pin gochujang selfies bespoke portland chillwave seitan vice. Hot chicken forage marfa VHS, normcore unicorn four loko brunch chicharrones hella kinfolk single-origin coffee. Twee banjo brunch, raclette tattooed raw denim williamsburg tumeric synth squid normcore.',
          over_21: 'true',
          start_datetime: '9/23/2016 16:00:00',
          end_datetime: '9/23/2016 18:00:00',
          venue_id: knex('venues').select('id').where('name', 'US Department of Energy Lab')
        }),
        knex('events').insert({
          title: 'Kiddie Pool, Salt, Small Child: How to Get to the Upside Down',
          description: 'Copper mug selvage kogi, vegan neutra cronut meh raw denim lo-fi williamsburg hashtag. Hot chicken keffiyeh pitchfork, wolf biodiesel kitsch meh iceland chambray. Deep v cornhole yuccie sriracha aesthetic butcher. Kale chips hashtag normcore vinyl, shoreditch brooklyn microdosing XOXO. Four dollar toast readymade copper mug franzen banh mi 8-bit literally. Chillwave photo booth retro pug. Enamel pin put a bird on it skateboard, chillwave kale chips brooklyn art party pork belly truffaut biodiesel wayfarers vinyl affogato hella.',
          over_21: 'true',
          start_datetime: '9/26/2016 19:00:00',
          end_datetime: '9/26/2016 21:00:00',
          venue_id: knex('venues').select('id').where('name', 'US Department of Energy Lab')
        }),
        knex('events').insert({
          title: 'Demagorgon Meet & Greet',
          description: 'Synth butcher pork belly sartorial, lomo bicycle rights dreamcatcher gochujang blue bottle farm-to-table direct trade artisan DIY shoreditch. Artisan meditation bushwick lumbersexual. Fingerstache small batch cornhole, sriracha aesthetic taxidermy gochujang seitan fixie succulents chia iceland knausgaard. Aesthetic letterpress jean shorts yr ramps, shoreditch brooklyn polaroid microdosing ennui tilde health goth gochujang tofu offal. Chicharrones kogi chia, wayfarers 8-bit man bun occupy portland glossier keffiyeh franzen unicorn disrupt bitters. Iceland crucifix ugh, flannel wolf chicharrones twee cornhole four dollar toast af edison bulb vegan freegan raclette listicle. Tumblr semiotics literally, selfies etsy raw denim poutine pour-over craft beer gentrify mlkshk four dollar toast.',
          over_21: 'true',
          start_datetime: '9/23/2016 22:00:00',
          end_datetime: '9/24/2016 02:00:00',
          venue_id: knex('venues').select('id').where('name', 'US Department of Energy Lab')
        })
      ]);
    });
};
