A Hoenn Pokédex API (and eventually web app), now with Apollo/GraphQL (and eventually React)

A rebuild of the pokedex project I originally made many moons ago - see the old readme below, I'll gradually update this.

### Old Readme

After my issues navigating the PokéApi - It's great, but hardly beginner-friendly, and I have to assume needlessly in-depth for a lot of users - I've decided to have a go at my own one. It's MUCH smaller in size, and only extends to the first 386 Pokémon.

The data is pretty much directly from the PokéApi, although I did a bunch of cleaning up and formatting, and removed certain later-gen pokémon from evolution chains.

Searches can also effectively be carried out as follows:

/pokedexdata/name/${name} - returns a given pokemon based on the name supplied

/pokedexdata/id/${id} - returns a given pokemon based on the id supplied

/pokedexdata/type/${type} - returns an array of pokemon of the supplied type

/pokedexdata/ability/${ability} - returns an array of pokemon with the supplied ability

I'd like to thank the PokéApi bunch for their hard work - I'm not sure this use case was necessarily what they had in mind, but without their API making mine wouldn't have been possible. The various images are also still from their Github hosting.

Clearly I don't own any of the intellectual property in use here, so credit to Nintendo etc for that, and for them being chill about people making this kind of thing - more on that here:

https://www.forbes.com/sites/matthickey/2014/11/17/nintendo-to-allow-its-characters-in-other-media-license-free/?sh=243269584180

The 'staging' build of the web app is available at https://hoenn-pokedex-staging.herokuapp.com/ - I have more work to do on it, but the fundamental functionality more or les works.
