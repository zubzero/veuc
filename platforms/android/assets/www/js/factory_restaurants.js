// This is were all restaurants data sits usedin restaurantList.html. Only for France.
// eventually this will come from API/webservices

angular.module('wmapp.factory_restaurants', ['greatCircles'])

    .factory('restaurantsFactory', function () {
        "use strict";
        var factory = {
		        Restaurants : [
                    {Name: 'Punto guadalajara', lat: 20.7007988, long: -103.2721199 },
                    {Name: 'A La Biche Au Bois', venueType: 'Restaurant ',  subCuisine: 'Italian',  subsubCuisine: 'Classic/traditional', address: '45 Avenue Ledru-Rollin', cp: '75012', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST002', phoneNumber: '+331 43 43 34 38', website: '', lat: 48.8482040, long: 2.3706140, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Allard   ', venueType: 'Restaurant ',  subCuisine: 'French',  subsubCuisine: 'Classic/traditional', address: '41, rue Saint-André des Arts', cp: '75006', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST004', phoneNumber: '+33158002342', website: 'http://www.restaurant-allard.fr/en', lat: 48.8532490, long: 2.3409810, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Ambassade d\'Auvergne', venueType: 'Restaurant ',  subCuisine: 'French',  subsubCuisine: 'Auvergne region', address: '22 Rue du Grenier Saint-Lazare', cp: '75003', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST005', phoneNumber: '+331 42 72 31 22', website: 'http://www.ambassade-auvergne.com/', lat: 48.8631310, long: 2.3534140, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Atelier Aubrac', venueType: 'Restaurant ',  subCuisine: 'French',  subsubCuisine: 'Auvergne region', address: '51 Boulevard Garibaldi', cp: '75015', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST006', phoneNumber: '+331 45 66 96 78', website: 'http://www.atelieraubrac.com/', lat: 48.8463560, long: 2.3078280, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Au Bascou', venueType: 'Restaurant ',  subCuisine: 'French',  subsubCuisine: 'Basque ', address: '38 Rue Réaumur', cp: '75003', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST007', phoneNumber: '+331 42 72 69 25', website: 'http://www.au-bascou.fr/en/index.php', lat: 48.8653980, long: 2.3573950, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Au Boeuf Couronné', venueType: 'Restaurant ',  subCuisine: 'French',  subsubCuisine: 'Classic/traditional', address: '188 Avenue Jean Jaurès', cp: '75019', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST008', phoneNumber: '+331 42 39 44 44', website: 'http://www.boeuf-couronne.com/en/', lat: 48.8879590, long: 2.3910170, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Au bon coin', venueType: 'Restaurant ',  subCuisine: 'French',  subsubCuisine: 'Classic/traditional', address: '21, rue de la Collegiale', cp: '75005', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST009', phoneNumber: '+33 1 43 31 55 57', website: 'http://www.auboncoin-bistrot.com/en', lat: 48.8381080, long: 2.3517440, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Au Bourguignon du Marais', venueType: 'Restaurant ',  subCuisine: 'French',  subsubCuisine: 'Classic/traditional', address: '52 Rue François Miron', cp: '75004', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST010', phoneNumber: '+331 48 87 15 40', website: '', lat: 48.8550680, long: 2.3573650, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Au coin pasteur - le pot au feu', venueType: 'Restaurant ',  subCuisine: 'French',  subsubCuisine: 'Classic/traditional', address: '59 Boulevard Pasteur', cp: '75015', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST011', phoneNumber: '+331 43 20 79 80', website: 'http://au-coin-pasteur.bypf.mobi/', lat: 48.8414940, long: 2.3145400, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
                     {Name: 'Gérard Mulot', venueType: 'Pastry shop',  subCuisine: 'French',  subsubCuisine: '', address: '76 Rue de Seine', cp: '75006', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST248', phoneNumber: '+331 43 26 85 77', website: '', lat: 48.8517980, long: 2.3369690, icon: 'img/restaurantBIS_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Punto tlaquepaque', lat: 20.6256293, long: -103.2880367 },
                    {Name: 'Le Grenier à Pain -  Faubourg Poissonnière', venueType: 'Bakery',  subCuisine: 'French',  subsubCuisine: '', address: '91, rue Faubourg Poissonnière', cp: '75010', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST341', phoneNumber: '', website: 'http://www.legrenierapain.com/fr/paris', lat: 48.8772140, long: 2.3489750, icon: 'img/restaurantBIS_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Le Grenier à Pain - av d\'Italie', venueType: 'Bakery',  subCuisine: 'French',  subsubCuisine: '', address: '52 Avenue d\'Italie', cp: '75013', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST342', phoneNumber: '', website: 'http://www.legrenierapain.com/fr/paris', lat: 48.8276580, long: 2.3562030, icon: 'img/restaurantBIS_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Le Grenier à Pain - Saint Amand', venueType: 'Bakery',  subCuisine: 'French',  subsubCuisine: '', address: '33B Rue Saint-Amand', cp: '75015', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST343', phoneNumber: '', website: 'http://www.legrenierapain.com/fr/paris', lat: 48.8341290, long: 2.3089710, icon: 'img/restaurantBIS_pointer_WMcustom_40x49_v3.png'},
                     {Name: 'Pierre Hermé - Paul Doumer', venueType: 'Chocolate shop',  subCuisine: 'French',  subsubCuisine: '', address: '58 avenue Paul Doumer', cp: '75016', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST425', phoneNumber: '', website: 'http://www.pierreherme.com/products.html', lat: 48.8602280, long: 2.2802000, icon: 'img/restaurantBIS_pointer_WMcustom_40x49_v3.png'},
 {Name: 'L\'Atelier de l\'Éclair', venueType: 'Pastry shop',  subCuisine: 'French',  subsubCuisine: '', address: '16 Rue Bachaumont', cp: '75002', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST426', phoneNumber: '', website: 'http://www.latelierdeleclair.fr/', lat: 48.8662680, long: 2.3452460, icon: 'img/restaurantBIS_pointer_WMcustom_40x49_v3.png'},
                         {Name: 'Au Verger de la Madeleine', venueType: 'Wine Shop',  subCuisine: 'French',  subsubCuisine: '', address: '4 Boulevard Malesherbes', cp: '75008', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST531', phoneNumber: '', website: '', lat: 48.8704390, long: 2.3231160, icon: 'img/restaurantBIS_pointer_WMcustom_40x49_v3.png'},
 {Name: 'Le Verre Volé  - Lancry', venueType: 'Wine Shop',  subCuisine: 'French',  subsubCuisine: '', address: '67 rue de Lancry', cp: '75010', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST532', phoneNumber: '', website: 'http://leverrevole.fr/', lat: 48.8728370, long: 2.3634330, icon: 'img/restaurantBIS_pointer_WMcustom_40x49_v3.png'},
                    {Name: 'Fromagerie Hardouin Cyrille  ', venueType: 'Cheese shop',  subCuisine: 'French',  subsubCuisine: '', address: '6 Place Aligre', cp: '75012', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST741', phoneNumber: '', website: 'http://www.fromagerie-hardouin-paris.fr/', lat: 48.8486810, long: 2.3778810, icon: 'img/restaurantBIS_pointer_WMcustom_40x49_v3.png'},
                     {Name: 'Au Petit Sud Ouest', venueType: 'Restaurant ',  subCuisine: 'French',  subsubCuisine: 'South-West', address: '46, Avenue de la Bourdonnais', cp: '75007 ', city: 'Paris', country: 'France', countryCode: 'FR', itemid: 'PARIREST013', phoneNumber: '+33145555959', website: 'http://www.au-petit-sud-ouest.fr/', lat: 48.8568530, long: 2.3008370, icon: 'img/restaurant_pointer_WMcustom_40x49_v3.png'},
   
                    
    
		        ],
		        getRestaurants : function () {
			        return factory.Restaurants;
		        },
	        };
	    return factory;
    
    });