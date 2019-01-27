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

        //[HttpGet("[action]")]
        [HttpGet("{name}")]
        public string GetPokemon(string name)
        {
            HttpClient client = new HttpClient(); 

            return client.GetStringAsync("https://pokeapi.co/api/v2/pokemon/" + name).Result;
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
