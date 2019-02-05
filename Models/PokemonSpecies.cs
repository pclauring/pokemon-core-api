using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pokemon_card.Models
{
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
        [JsonProperty("sprites")]
        public PokemonSprites PokemonSprites { get; set; }
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
        public string Name { get; set; }
        [JsonProperty("url")]
        public string TypeInfoUrl { get; set; }
    }

    public class PokemonSprites
    {
        [JsonProperty("front_default")]
        public string FrontSpriteUrl { get; set; }
        [JsonProperty("back_default")]
        public string BackSpriteUrl { get; set; }
        [JsonProperty("front_shiny")]
        public string ShinyFrontSpriteUrl { get; set; }
        [JsonProperty("back_shiny")]
        public string ShinyBackSpriteUrl { get; set; }
    }

}
