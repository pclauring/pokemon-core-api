using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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
        public string GetPokemonSpeciesInfo(string Id) => client.GetStringAsync("https://pokeapi.co/api/v2/pokemon-species/" + Id).Result;

        [HttpGet("full-pokemon/{Id}")]
        public PokemonSpecies GetFullPokemon(string Id)
        {

            var response = client.GetStringAsync("https://pokeapi.co/api/v2/pokemon/" + Id).Result;
            var pokemon = JsonConvert.DeserializeObject<PokemonSpecies>(response);
            return pokemon;

        }

        public class PokemonSpecies
        {
            [JsonProperty("name")]
            public string Name { get; set; }
            [JsonProperty("id")]
            public int PokemonId { get; set; }
            [JsonProperty("height")]
            public int Height { get; set; }
            [JsonProperty("types")]
            public List<PokemonType> PokemonTypes { get; set; }
        }


        public class PokemonType
        {
            [JsonProperty("type")]
            public Type Type { get; set; }
            [JsonProperty("slot")]
            public int Slot { get; set; }
        }

        public class Type
        {
            [JsonProperty("name")]
            public string Name {get; set;}
            [JsonProperty("url")]
            public string TypeInfoUrl {get; set;}
        }
    }
}
