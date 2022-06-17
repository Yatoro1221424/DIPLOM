<template>
    <v-expansion-panels focusable>
        <v-expansion-panel>
            <v-expansion-panel-header hide-actions expand-icon="mdi-menu-down">
                <h3>Проект: {{project.name}} </h3><!--{{project.name}}-->
                <v-spacer/>
                <p></p><!--{{project.status}}-->
                <v-checkbox class="shrink mr-2 mt-0" />
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-list-item-content>
                    <v-text-field
                        name="input-7-4"
                        disabled
                        required
                    ></v-text-field> 
                    <v-spacer/>
                    <v-text-field
                        name="input-7-4"
                        disabled
                        required
                    >
                        {{project.name}}
                    </v-text-field><!--{{project.name}}-->
                </v-list-item-content>
                <v-list-item-content>
                    <v-spacer/>
                    <v-textarea
                        outlined
                        name="input-7-4"
                        label="Описание проекта"
                    ></v-textarea>
                    <v-row >
                        <v-col cols="12" sm="3" >
                            <v-btn icon color="red lighten-2">
                                <v-icon>content-save</v-icon>
                            </v-btn>
                            <v-btn icon color="yellow lighten-2">
                                <v-icon>grease-pencil</v-icon>
                            </v-btn>
                            <v-spacer/>
                            <v-btn icon color="blue lighten-2">
                                <v-icon>mdi-thumb-up</v-icon>
                                <p></p><!--{{project.like}}-->
                            </v-btn>
                            <v-btn icon color="lighten-2">
                                <v-icon>mdi-thumb-down</v-icon>
                                <p></p><!--{{project.dislike}}-->
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-list-item-content>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "ProjectEntryListItem",
    props: ['project'],
    methods: {
        ...mapActions('admin', ['fetchProjects', 'sendProject']),
    }
}
</script>
