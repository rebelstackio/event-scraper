var eventSchema = {
	"title": "Event Form",
	"type": "object",
	"properties": {
		"eid": { label:"event id" , id:"eid", name: "eid", type: "text"},
		"pub": { label:"publish stamp", id:"pub", name: "pub"},
		"lct": { label:"location", id:"lct", name: "lct", type: "text"},
		"cty": { label:"city", id:"cty", name: "cty", type: "text"},
		"lcl": { label:"locale", id:"lcl", name: "lcl", type: "text"},
		"ref": { label:"refers to", id:"ref", name: "ref", type: "text"},
		"ini": { label:"start date", id:"ini", name: "ini", type: "text"},
		"end": { label:"end date", id:"end", name: "end", type: "text"},
		"dur": { label:"duration(seconds)", id:"dur", name: "dur", type: "number"},
		"rpt": { label:"repeat", id:"rpt", name: "rpt"},
		"tit": { label:"title", id:"tit", name: "tit", type: "text"},
		"sht": { label:"short description" , id:"sht", name: "sht", type: "text"},
		"lng": { label:"long description" , id:"lng", name: "lng", type: "textarea"},
		"img": { label:"image", id: "img", name: "img", type: "image"},
		"prc": { label:"price (from)", id:"prc", name: "prc", type: "number"},
		"cre": { label:"created stamp", id:"cre", name: "cre", type: "text"},
		"crb": { label:"created by", id:"crb", name: "crb", type: "text" },
		"mod": { label:"modified stamp", id:"mod", name: "mod", type: "text" },
		"mob": { label:"modified by", id:"mob", name: "mob", type: "text" },
		"own": { label:"owner/group id", id:"own", name: "own", type: "text"},
		"tag": { label: "Tags", id:"tag", name:"tag", id:"tag", name: "tag"},
		"lat": { label: "Latitud", id: "lat", name: "lat", type: "text"},
		"log": { label: "Longitud", id: "log", name: "log", type: "text"},
   "hstr": { label: "Hora Inicio", id: "hstr", name: "hstr", type: "text"},
   "hend": { label: "Hora Termino", id: "hend", name: "hend", type: "text"}
 },
 "show": ["eid","lct","cty","ref","ini", "end", "tit","sht", "lng","prc","tag", "lat", "log", "hstr", "hend"]
};
