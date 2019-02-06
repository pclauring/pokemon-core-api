using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using pokemon_card.Models;

namespace pokemon_card.Models
{
    public class PokemonTypeSpec
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("damage_relations")]

        public DamageRelations DamageRelations { get; set; }
    }

    public class DamageRelations
    {
        [JsonProperty("double_damage_from")]
        public List<PokemonType> DoubleDamageFromRelation { get; set; }
    }
}