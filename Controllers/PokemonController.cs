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
        [HttpGet("{name}")]
        public string GetPokemon(string name)
        {
            return client.GetStringAsync("https://pokeapi.co/api/v2/pokemon/" + name).Result;
        }

        [HttpGet("/async/{name}")]
        static async Task<Object> GetPokemonAsync(string name)
        {
            Object result = null;
            HttpResponseMessage response = await client.GetAsync("https://pokeapi.co/api/v2/pokemon/" + name);
            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadAsAsync<Object>();
            }
            return result;
        }
    }
}
