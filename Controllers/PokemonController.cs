using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using pokemon_card.Models;

namespace pokemon_card.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokemonController : Controller
    {

        static HttpClient client = new HttpClient();

        //[HttpGet("[action]")]
        [HttpGet("{Id}")]
        public string GetPokemon(string Id)
        {
            return client.GetStringAsync("https://pokeapi.co/api/v2/pokemon/" + Id).Result;
        }

        [HttpGet("species/{Id}")]
        public string GetPokemonSpeciesInfo(string Id)
        {
            return client.GetStringAsync("https://pokeapi.co/api/v2/pokemon-species/" + Id).Result;
        }

        [HttpGet("full-pokemon/{Id}")]
        public PokemonSpecies GetFullPokemon(string Id)
        {

            var response = client.GetStringAsync("https://pokeapi.co/api/v2/pokemon/" + Id).Result;
            var pokemon = JsonConvert.DeserializeObject<PokemonSpecies>(response);
            return pokemon;
        }

        [HttpGet("type-info/{name}")]
        public PokemonTypeSpec GetTypeInformation(string name)
        {

            var response = client.GetStringAsync("https://pokeapi.co/api/v2/type/" + name).Result;
            var pokemonTypeSpec = JsonConvert.DeserializeObject<PokemonTypeSpec>(response);
            return pokemonTypeSpec;
        }
    }
}
