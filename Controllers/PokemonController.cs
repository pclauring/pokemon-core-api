using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

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
    }
}
