# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Animal.destroy_all
State.destroy_all
Organization.destroy_all
 Animalstate.destroy_all
 Stateorganization.destroy_all
 Sighting.destroy_all

#ALABAMA
indian_manatee = Animal.create!(species:'Mammal',name:'Indian Manatee',count:6500,img:'https://ecos.fws.gov/docs/species_images/doc3661-250px-thumbnail.jpg',critical:false,rise:false,description:'	
Threatened; A species likely to become endangered within the foreseeable future throughout all or a significant portion of its range. Manatees are protected under the Marine Mammal Protection Act, which prohibits the take (i.e., harass, hunt, capture, or kill) of all marine mammals. Manatees are found in marine, estuarine, and freshwater environments. The West Indian manatee, Trichechus manatus, includes two distinct subspecies, the Florida manatee (Trichechus manatus latirostris) and the Antillean manatee (Trichechus manatus manatus). While morphologically distinctive, both subspecies have many common features. Manatees have large, seal-shaped bodies with paired flippers and a round, paddle-shaped tail. They are typically grey in color (color can range from black to light brown) and occasionally spotted with barnacles or colored by patches of green or red algae. The muzzle is heavily whiskered and coarse, single hairs are sparsely distributed throughout the body. Adult manatees, on average, are about nine feet long (3 meters) and weigh about 1,000 pounds (200 kilograms). At birth, calves are between three and four feet long (1 meter) and weigh between 40 and 60 pounds (30 kilograms).', threats:'Commercial & industrial areas,
Tourism & recreation areas, Domestic & urban waste water,
Industrial & military effluents,
Agricultural & forestry effluents,
Excess energy')

black_pine_snake = Animal.create!(species:'Reptile', name:'Black Pine Snake',img:'https://ecos.fws.gov/docs/species_images/doc5680-250px-thumbnail.jpg',critical:true,rise:false,description:'	
Adults average from 48-64 inches (122-163 cm). The record is 89 inches (226 cm). A large stocky snake. Back and belly are uniform (or nearly so) black or dark brown. Faint blotches may be seen on the hindbody or tail. In')

flattened_musk_turtle = Animal.create!(species:'Reptile', name:'Flattened Musk Turtle',img:'https://ecos.fws.gov/docs/species_images/doc4502-250px-thumbnail.jpg',critical:true,rise:false,description:'The flattened musk turtle is a small aquatic turtle with a distinctly flattened carapace up to 119 millimeters (4.7 in) long. Keels are virtually, if not altogether, lacking (Mount 1981). The carapace is dark brown to orange with dark bordered seams and is slightly serrated behind (Ernest and Barbour 1972). The plastron is pink to yellowish. The head is greenish with a dark reticulum that often breaks up to form spots on the top of the snout (Mount 1981). Stripes on the top and sides of the neck, if present, are narrow. There are two barbels on the chin, all four feet are webbed, and males have thick, long, spine-tipped tails (Ernst and Barbour 1972).', habitat:'No critical habitat has been designated for this species.',threats:'Mining & quarrying,Domestic & urban waste water,
Industrial & military effluents,
Agricultural & forestry effluents')

wood_stork = Animal.create!(species:'Bird', name:'Wood Stork',img:'https://ecos.fws.gov/docs/species_images/doc5013-250px-thumbnail.jpg',critical:false,rise:true,description:'Wood storks are large, long-legged wading birds, about 5O inches tall, with a wingspan of 60 to 65 inches. The plumage is white except for black primaries and secondaries and a short black tail. The head and neck are largely unfeathered and dark gray in color. The bill is black, thick at the base, and slightly decurved. Immature birds are dingy gray and have a yellowish bill.', habitat:'No critical habitat has been designated for this species.')

savethemanatee =Organization.create!(name:'Save The Manatee',mission:'Save the Manatee Club was founded in 1981 by Bob Graham, former Florida Governor and U.S. Senator, and singer/songwriter Jimmy Buffett. The Club was started with the mission to protect manatees and their habitat. Today, Save the Manatee Club is the world’s leading manatee conservation organization.', since:1981,img:'https://www.savethemanatee.org/wp-content/uploads/2017/02/smc_logo_150.png', link:'https://www.savethemanatee.org/')

edge =Organization.create!(name:'EDGE',mission:'The EDGE of Existence programme highlights and protects some of the most unique species on the planet, which are on the verge of extinction.',img:'https://www.edgeofexistence.org/wp-content/themes/zsledge/dist/img/footer-logo.png', link:'https://www.edgeofexistence.org/')

nature_conservancy= Organization.create!(name:'The Nature Conservancy',mission:'The Nature Conservancy is a nonprofit, tax-exempt charitable organization (tax identification number 53-0242652) under Section 501(c)(3) of the U.S. Internal Revenue Code. Donations are tax-deductible as allowed by law. Global sites represent either regional branches of The Nature Conservancy or local affiliates of The Nature Conservancy that are separate entities.',img:'https://www.nature.org/content/dam/tnc/nature/en/logos/tnc-logo-white.svg', link:'https://www.nature.org/en-us/about-us/where-we-work/united-states/florida/stories-in-florida/wood-storks-at-disney-wilderness-preserve/')

alabama = State.create!(state:'Alabama', short:'AR')

animal_state_alabama1 = Animalstate.create!(animal_id:indian_manatee.id,state_id:alabama.id)
animal_state_alabama2= Animalstate.create!(animal_id:flattened_musk_turtle.id,state_id:alabama.id)
animal_state_alabama3= Animalstate.create!(animal_id:wood_stork.id,state_id:alabama.id)
animal_state_alabama4= Animalstate.create!(animal_id:black_pine_snake.id,state_id:alabama.id)

state_organization_alabama1 = Stateorganization.create!(organization_id:savethemanatee.id,animal_id:indian_manatee.id)
state_organization_alabama2 = Stateorganization.create!(organization_id:edge.id,animal_id:flattened_musk_turtle.id)
state_organization_alabama3 = Stateorganization.create!(organization_id:nature_conservancy.id,animal_id:wood_stork.id)
state_organization_alabama1 = Stateorganization.create!(organization_id:nature_conservancy.id,animal_id:black_pine_snake.id)



# ALASKA
polar_bear = Animal.create!(species:'Mammal',name:'Polar Bear',count:20000,img:'https://ecos.fws.gov/docs/species_images/doc5025-250px-thumbnail.jpg',critical:true,rise:false,description:'Throughout the Arctic, polar bears are known by a variety of common names,
including nanook, nanuq, ice bear, sea bear, isbjorn, white bears, and beliy medved.
Genetic research has confirmed that polar bears evolved from grizzly (brown)
bears (Ursus arctos) 250 to 300 thousand years ago (Cronin et al. 1991, p. 2990;
Talbot and Shields 1996a, p. 574). Only in portions of northern Canada and
northern Alaska do the ranges of polar bears and grizzly bears overlap. Polar bears are the largest of the living bear species. Polar bears are carnivorous and an upper level predator of the Arctic marine ecosystem. Polar bears prey heavily throughout their range on ringed seals (Phoca hispida) and, to a lesser extent, bearded seals (Erignathus barbatus) and in some locales, other seal species.
Polar bears are characterized by a late age at sexual maturity, small litter sizes, and extended parental investment in raising young, factors that combine to contribute to a very low reproductive rate. Reproduction in the female polar
bear is similar to that in other ursids (bears). Females generally mature and breed for the first time at 4 or 5 years and give birth at 5 or 6 years of age. Litters of two cubs are most common, but litters of three cubs are seen sporadically across the Arctic.', threats:'Commercial & industrial areas
Tourism & recreation areas, Oil & gas drilling,Hunting & trapping terrestrial animals')

eider = Animal.create!(species:'Bird',name:'Spectacled Eider',count:nil,img:'https://ecos.fws.gov/docs/species_images/doc4940-250px-thumbnail.jpg',critical:true,rise:false,description:'Spectacled eiders are large sea ducks, 52 to 56 centimeters long (20 to 22 inches). In the winter and spring, adult males are in breeding plumage with a black chest, white back, and pale green head with a long, sloping forehead and white patches resembling spectacles around the eyes. During the late summer and fall, males are entirely mottled brown. Females and juveniles are mottled brown yearÃ¢ï¿½ï¿½round with pale brown eye patches.', threats:'Commercial & industrial areas
Tourism & recreation areas, Industrial & military effluents
Garbage & solid waste')

albatross = Animal.create!(species:'Bird',name:'Short-tailed Albatross',count:1734,img:'https://ecos.fws.gov/docs/species_images/doc5018-250px-thumbnail.jpg',critical:false,rise:true,description:'The largest and only white-bodied albatross in the north Pacific. Golden, yellow cast on head and nape. Upper wings: white with black primaries, secondaries, and tertials. Under wing: white with black leading and trailing edges. White tail with black fringe. Large, pink bill with blue tip and black boarder around the base. Pale bluish feet and legs. Length: 84-91 cm (33.6-36.4 in); wingspan: 213-229 cm (7-7.5 ft); average life span: 12-45 yrs.', threats:'Commercial & industrial areas
Tourism & recreation areas, Oil & gas drilling,Hunting & trapping terrestrial animals')

savethepolarbear =Organization.create!(name:'Polar Bears International',mission:'The only way to save the bears and their sea ice habitats is to control temperature rise through greenhouse gas mitigation.', since:nil,img:'https://polarbearsinternational.org/img/home/PBI-logo.png', link:'https://polarbearsinternational.org/')

iucn=Organization.create!(name:'IUCN',mission:'IUCN, International Union for Conservation of Nature', since:nil,img:'https://www.iucn.org/sites/dev/files/iucn_logo-small_0.png', link:'https://www.iucn.org/')

audubon = Organization.create!(name:'AUDUBON',mission:'The National Audubon Society protects birds and the places they need, today and tomorrow, throughout the Americas using science, advocacy, education, and on-the-ground conservation.', since:1905,img:'https://nas-national-prod.s3.amazonaws.com/styles/bird_illustration/s3/2131_Sibl_9780307957900_art_r1.jpg?itok=W1XdznW0', link:'https://www.audubon.org/field-guide/bird/spectacled-eider')

alaska = State.create!(state:"Alaska", short:'AK')

animal_state_alaska1 = Animalstate.create!(animal_id:polar_bear.id,state_id:alaska.id)
animal_state_alaska2= Animalstate.create!(animal_id:eider.id,state_id:alaska.id)
animal_state_alaska3 = Animalstate.create!(animal_id:albatross.id,state_id:alaska.id)
state_organization_alaska1 = Stateorganization.create!(organization_id:savethepolarbear.id,animal_id:polar_bear.id)
state_organization_alaska2 = Stateorganization.create!(organization_id:iucn.id,animal_id:albatross.id)
state_organization_alaska3 = Stateorganization.create!(organization_id:audubon.id,animal_id:eider.id)



# ARIZONA
blackferret = Animal.create!(species:'Mammal',name:'Black-footed Ferret',count:206,img:'https://ecos.fws.gov/docs/species_images/doc5012-250px-thumbnail.jpg',critical:true,rise:false,description:'The black-footed ferret is 18 to 24 inches long, including a 5 to 6 inch tail. It weighs only one-and-a-half to two-and-a-half pounds, with males slightly larger than females. The black-footed ferret is well adapted to its prairie environment. Its color and markings blend so well with grassland soils and plants, that it is hard to detect until it moves. It is a slender, wiry animal with a black face mask, black feet, and a black-tipped tail. The rest of its short, sleek fur is a yellow-buff color, lighter on the belly and nearly white on the forehead, muzzle, and throat.', threats:'Housing & urban areas,Hunting & trapping terrestrial animals')



mxwolf = Animal.create!(species:'Mammal',name:'Mexican wolf',count:nil,img:'https://ecos.fws.gov/docs/species_images/doc4961-250px-thumbnail.jpg',critical:false,rise:true,description:'Endangered; A species in danger of extinction throughout all or a significant portion of its range.', threats:'Oil & gas drilling,
Mining & quarrying')



wildEarth = Organization.create!(name:'WildEarth Guardians',mission:'WildEarth Guardians protects and restores the wildlife, wild places, wild rivers, and health of the American West.
Driven by passion, we’ve tackled some of the West’s most difficult and pressing conservation challenges over the past three decades.', since:nil,img:'https://wildearthguardians.org/wp-content/uploads/2018/08/weg-logo-1.svg', link:'https://wildearthguardians.org/wildlife-conservation/endangered-species-list/mammals/black-footed-ferret/?gclid=CjwKCAjwjqT5BRAPEiwAJlBuBeLCKrFtSae9072mVh2cmcgqUp7JkoxETfnMh9eg9Yeo3uz4aVII5xoCaDEQAvD_BwE')

afs = Organization.create!(name:'The American Ferret Association',mission:'In 1987, a small group of ferret owners created a ferret club in Montgomery County, Maryland. As the club expanded, members began to organize ferret shows, "fun match" competitions and educational events. To reflect this growth, a new charter was written in 1990 and the club became the mid-Atlantic Ferret Association.', since:1990,img:'https://www.ferret.org/images/header_afa_logo.jpg', link:'https://www.ferret.org/read/BFF-Page.html')


panthera = Organization.create!(name:'Panthera',mission:'Panthera is the only organization in the world that is devoted exclusively to the conservation of the world’s 40 wild cat species and their ecosystems.', since:nil,img:'PANTHERA', link:'https://www.panthera.org/')

northernjp = Organization.create!(name:'Northern Jaguar Project',mission:'We formed the Northern Jaguar Project to safeguard jaguars in this region from poaching and habitat destruction. At the heart of our work is the 86-square-mile Northern Jaguar Reserve, a remote, rugged, and exceedingly wild landscape where a small breeding population of these wild cats survives.', since:nil,img:'http://www.northernjaguarproject.org/wp-content/uploads/2008/09/njp-logo4.jpg', link:'https://www.northernjaguarproject.org/')

awi = Organization.create!(name:'ANIMAL WELFARE INSTITUTE',mission:'Since 1951, the Animal Welfare Institute has been alleviating suffering inflicted on animals by humans. In the early years, AWI founder Christine Stevens sought to end the cruel treatment of animals in experimental laboratories. Inevitably, her work expanded to take on other animal welfare causes.
', since:1951,img:'https://awionline.org/themes/awi/logo.svg', link:'https://awionline.org/cases/protection-ocelots')

arizona = State.create!(state:'Arizona',short:'AZ')

animal_state_arizona1 = Animalstate.create!(animal_id:blackferret.id,state_id:arizona.id)
animal_state_arizona2 = Animalstate.create!(animal_id:mxwolf.id,state_id:arizona.id)

state_organization_arizona = Stateorganization.create!(organization_id:wildEarth.id,animal_id:blackferret.id)
state_organization_arizona1 = Stateorganization.create!(organization_id:afs.id,animal_id:blackferret.id)
state_organization_arizona2= Stateorganization.create!(organization_id:panthera.id,animal_id:mxwolf.id)
state_organization_arizona3= Stateorganization.create!(organization_id:iucn.id,animal_id:mxwolf.id)
state_organization_arizona4= Stateorganization.create!(organization_id:wildEarth.id,animal_id:mxwolf.id)

# Texas
leatherback = Animal.create!(species:'Reptile',name:'Leatherback sea turtle',img:'https://ecos.fws.gov/docs/species_images/doc3727-250px-thumbnail.jpg',critical:true,rise:true,description:'The leatherback is the largest, deepest diving, and most migratory and wide ranging of all sea turtles. The adult leatherback can reach 4 to 8 feet in length and 500 to 2000 pounds in weight. Its shell is composed of a mosaic of small bones covered by firm, rubbery skin with seven longitudinal ridges or keels. The skin is predominantly black with varying degrees of pale spotting; including a notable pink spot on the dorsal surface of the head in adults. A toothlike cusp is located on each side of the gray upper jaw; the lower jaw is hooked anteriorly. The paddle-like clawless limbs are black with white margins and pale spotting.', threats:'Commercial & industrial areas
Tourism & recreation areas')

hawksbill =  Animal.create!(species:'Reptile',name:'Hawksbill Sea Turtle',img:'https://ecos.fws.gov/docs/species_images/doc4876-250px-thumbnail.jpg',count:2000, critical:true,rise:false,description:'The endangered Hawksbill Sea Turtle is one of seven species of sea turtles found throughout the world. One of the smaller sea turtles, it has overlapping scutes (plates) that are thicker than those of other sea turtles. This protects them from being battered against sharp coral and rocks during storm events.
Adults range in size from 30 to 36 inches (0.8-1.0 meters) carapace length, and weigh 100 to 200 pounds (45-90 kilograms). Its carapace (upper shell) is an attractive dark brown with faint yellow streaks and blotches and a yellow plastron (under shell). The name "hawksbill" refers to the turtles prominent hooked beak.', threats:'Oil & gas drilling')

jaguardi =  Animal.create!(species:'mammal',name:'Gulf Coast Jaguarundi',img:'https://ecos.fws.gov/docs/species_images/doc4898-250px-thumbnail.jpg',count:nil, critical:false,rise:true,description:'Slightly larger than a domestic cat; appearance is unlike any other cat â looks more like a large weasel or otter; uniform in color with a dark gray-brown to chestnut brown coat; darker animals usually found in the dense forest while the lighter individuals are found in more arid and open areas; body is long and low with short legs; small, flattened head with weasel-like ears and narrow brown eyes; long, flattened tail', threats:'Hunting & trapping terrestrial animals')

leatherbacktrust = Organization.create!(name:'The Leather Back Trust',mission:'The Leatherback Trust is a non-profit organization dedicated to saving the leatherback sea turtle. Our mission is to promote the conservation of leatherbacks and other turtles at risk of extinction.', since:1980,img:'https://media-exp1.licdn.com/dms/image/C4D1BAQEEpdl4Mo5aSQ/company-background_10000/0?e=2159024400&v=beta&t=uU8e2Sdt3_Vvs4GRmRC7eB0OYysguh1Ct-uS-PNGJwY', link:'https://www.leatherback.org/')

latortu = Organization.create!(name:'LA TORTUGA FELiZ ',mission:'La tortuga feliz is a non profit organisation, based in Costa Rica, whose aims are the protection of sea turtles with the help of volunteers. The participation of volunteers contributes to the improvement of the living conditions and education of the local inhabitants.

These local inhabitants guard/patrol the beach (Caribbean coast of Costa Rica) together with volunteers, collect the turtle eggs and bring these eggs to a hatchery which is manned by volunteers on a 24 hours basis. Volunteers also participate in the care for and study of recuperating adult turtles in the turtle rescue and rehabilitation centre.', since:2006,img:'https://www.latortugafeliz.com/cms/wp-content/uploads/2013/12/logo_web_v3.png', link:'https://www.latortugafeliz.com/tag/leatherback/?gclid=CjwKCAjwm_P5BRAhEiwAwRzSO_wv6arU9X4Xfa0fhJcqXK-PYhFqPkjDW16Y4P2-i1kIYyYoDUF4xRoCYj0QAvD_BwE')

wwf = Organization.create!(name:'World Wild Life ',mission:'WWF works with local communities to reduce turtle consumption of leatherback turtles and eggs. Our efforts help create awareness of the threats leatherbacks face and communicate the importance of protecting them. We also train and equip local rangers to protect turtles from poaching and patrol nesting beaches. In the Coral Triangle, we support community efforts to protect leatherback nest sites and launch ecotourism businesses.', since:1961,img:'https://upload.wikimedia.org/wikipedia/en/2/24/WWF_logo.svg', link:'https://www.worldwildlife.org/about/history')


iss= Organization.create!(name:'International Society for endangered Cats',mission:'To aid in the conservation of small wild cat species through education, public awareness and support for scientific field projects.', since:1990,img:nil, link:'https://wildcatconservation.org/wild-cats/south-america/jaguarundi/')

texas = State.create!(state:'Texas', short:'TX')

animal_state_texas1 = Animalstate.create!(animal_id:leatherback.id,state_id:texas.id)
animal_state_texas2 = Animalstate.create!(animal_id:hawksbill.id,state_id:texas.id)
animal_state_texas3 = Animalstate.create!(animal_id:jaguardi.id,state_id:texas.id)

state_organization_texas1 = Stateorganization.create!(organization_id:wildEarth.id,animal_id:leatherback.id)
state_organization_texas2 = Stateorganization.create!(organization_id:leatherbacktrust.id,animal_id:leatherback.id)
state_organization_texas3 = Stateorganization.create!(organization_id:latortu.id,animal_id:leatherback.id)
state_organization_texas4 = Stateorganization.create!(organization_id:wwf.id,animal_id:hawksbill.id)
state_organization_texas5 = Stateorganization.create!(organization_id:latortu.id,animal_id:hawksbill.id)
state_organization_texas6 = Stateorganization.create!(organization_id:wwf.id,animal_id:jaguardi.id)
state_organization_texas7 = Stateorganization.create!(organization_id:iss.id,animal_id:jaguardi.id)
state_organization_texas8 = Stateorganization.create!(organization_id:awi.id,animal_id:jaguardi.id)

# california

# colorado
# canadalynx = Animal.create!(species:'Mammal',name:'Canada Lynx',count:206,img:'https://ecos.fws.gov/docs/species_images/doc4979-250px-thumbnail.jpg',critical:false,rise:true,description:'The lynx is a medium-sized cat with long legs, large, well-furred paws, long tufts on the ears, and a short, black-tipped tail. The winter pelage of the lynx is dense and has a grizzled appearance with grayish-brown mixed with buff or pale brown fur on the back, and grayish-white or buff-white fur on the belly, legs and feet. Summer pelage of the lynx is more reddish to gray-brown. Adult males average 10 kilograms (22 pounds) in weight and 85 centimeters (33.5 inches) in length (head to tail), and females average 8.5 kilograms (19 pounds) and 82 centimeters (32 inches). The lynxs long legs and large feet make it highly adapted for hunting in deep snow.', threats:'Dams & water management/use
# Other ecosystem modifications
# ')

# colorado1=State.create!(animal_id:blackferret.id,organization_id:wildEarth.id,state:'Colorado',short:'CO')
# colorado2=State.create!(animal_id:blackferret.id,organization_id:afs.id,state:'Colorado',short:'CO')
# colorado3=State.create!(animal_id:canadalynx.id,organization_id:panthera.id,state:'Colorado',short:'CO')

# #connecticut
# bat1 = Animal.create!(species:'Mammal',name:'Northern Long-eared Bat',count:nil,img:'https://ecos.fws.gov/docs/species_images/doc5015-250px-thumbnail.jpg',critical:false,rise:true,description:'The northern long-eared bat is a medium-sized bat about 3 to 3.7 inches in length but with a wingspan of 9 to 10 inches. As its name suggests, this bat is distinguished by its long ears, particularly as compared to other bats in its genus, Myotis, which are actually bats noted for their small ears (Myotis means mouse-eared).', threats:'Dams & water management/use
# Other ecosystem modifications
# ')

# cbd = Organization.create!(name:'Center for Biological Diversity',mission:'At the Center for Biological Diversity, we believe that the welfare of human beings is deeply linked to nature — to the existence in our world of a vast diversity of wild animals and plants. Because diversity has intrinsic value, and because its loss impoverishes society, we work to secure a future for all species, great and small, hovering on the brink of extinction. We do so through science, law and creative media, with a focus on protecting the lands, waters and climate that species need to survive.', since:nil,img:'https://www.biologicaldiversity.org/w/static/images/cbd-press-header.a3d7726d6e35.gif', link:'https://biologicaldiversity.org/w/news/press-releases/court-northern-long-eared-bat-was-unlawfully-denied-endangered-species-protection-2020-01-29/#:~:text=Northern%20long%2Deared%20bat.,endangered%20species%20and%20wild%20places.')

# connecticut1 = State.create!(animal_id:bat1.id,organization_id:cbd.id,state:'Connecticut',short:'CT')
# delaware1 = State.create!(animal_id:bat1.id,organization_id:cbd.id,state:'Delaware',short:'DE')


#  t.string :species
#       t.string :name
#       t.integer :count
#       t.string :habitat
#       t.string :img
#       t.boolean :critical
#       t.boolean :rise
#       t.timestamps
#       t.string :description 
#       t.string :threats

#        t.string :name
#       t.string :mission
#       t.integer :since
#       t.string :rating
#       t.string :img

#        t.integer :animal_id
#       t.integer :organization_id
#       t.string :state
#       t.string :short